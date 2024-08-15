const express = require('express');
const mysql = require('mysql2');
const session = require('express-session');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const app = express();

app.use(express.json());

app.use(cors({
  origin: ['http://localhost:3000'], // Update this to your frontend URL when deploying
  methods: ['GET', 'POST'],
  credentials: true // Allow cookies and sessions
}));

// Session management configuration
app.use(session({
  key: 'userId',
  secret: 'secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24 // 1 day
  }
}));

// MySQL connection setup using environment variables from Heroku
const db = mysql.createConnection({
  host: process.env.DB_HOST, // Use environment variable
  user: process.env.DB_USER, // Use environment variable
  password: process.env.DB_PASSWORD, // Use environment variable
  database: process.env.DB_NAME, // Use environment variable
  port: process.env.DB_PORT || 3306 // Default to 3306 if not set
});

db.connect((err) => {
  if (err) throw err;
  console.log('Database connected!');
});

// Registration route
app.post('/register', (req, res) => {
  const { userName, gbcId, password } = req.body;
  if (!userName || !gbcId || !password) {
    return res.status(400).send({ message: 'Please fill all fields' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  db.query(
    'INSERT INTO users (userName, gbcId, password) VALUES (?, ?, ?)',
    [userName, gbcId, hashedPassword],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: 'Error registering user' });
      } else {
        res.status(201).send({ message: 'User registered!' });
      }
    }
  );
});

// Login route
app.post('/login', (req, res) => {
  const { gbcId, password } = req.body;
  db.query('SELECT * FROM users WHERE gbcId = ?', [gbcId], (err, result) => {
    if (err) {
      res.status(500).send({ err: err });
    } else if (result.length > 0) {
      const user = result[0];
      if (bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        res.status(200).send({ message: 'Login successful', user: user });
      } else {
        res.status(401).send({ message: 'Wrong username/password combination' });
      }
    } else {
      res.status(404).send({ message: 'User not found' });
    }
  });
});

// Check if user is logged in
app.get('/login', (req, res) => {
  console.log("GET /login route hit");
  if (req.session.user) {
    res.status(200).send({ loggedIn: true, user: req.session.user });
  } else {
    res.status(200).send({ loggedIn: false });
  }
});

// Logout route
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send({ message: 'Logout failed' });
    }
    res.clearCookie('userId');
    res.status(200).send({ message: 'Logout successful' });
  });
});

// Event register route
app.post('/register_event', (req, res) => {
  const { name, email, phone_number, additional_notes, campus_location, event_name } = req.body;

  if (!name || !email || !campus_location || !event_name) {
    return res.status(400).send({ message: 'Please fill all required fields' });
  }

  db.query(
    'INSERT INTO event_registrations (name, email, phone_number, additional_notes, campus_location, event_name) VALUES (?, ?, ?, ?, ?, ?)',
    [name, email, phone_number, additional_notes, campus_location, event_name],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: 'Error registering for the event' });
      } else {
        res.status(201).send({ message: 'Registration successful!' });
      }
    }
  );
});

// Start server
const PORT = process.env.PORT || 3001; // Use dynamic port provided by Heroku or default to 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
