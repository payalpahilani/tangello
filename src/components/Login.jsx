import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext.jsx';
import './Login.css';

function Login() {
  const [gbcId, setGbcId] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    const response = await login(gbcId, password);
    if (response.success) {
      setLoginStatus(`Welcome, ${response.user.userName}`);
      navigate('/'); // Redirect to home page
    } else {
      setLoginStatus(response.message);
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login to Tangello</h1>
        <div className="login-card-input">
          <input
            type="text"
            placeholder="Student ID"
            value={gbcId}
            onChange={(e) => setGbcId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        <h3>Don't have an account?</h3>
        <button onClick={goToRegister}>Register</button>
        <h3>{loginStatus}</h3>
      </div>
    </div>
  );
}

export default Login;
