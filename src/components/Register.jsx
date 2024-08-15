import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [userName, setUserName] = useState('');
  const [gbcId, setGbcId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [consent, setConsent] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState('');
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const register = () => {
    if (!userName || !gbcId || !password || !confirmPassword) {
      setRegistrationStatus('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setRegistrationStatus('Passwords do not match');
      return;
    }

    if (!consent) {
      setRegistrationStatus('You must agree to the terms and conditions.');
      return;
    }

    //reset registration status
    setRegistrationStatus('');

    // Proceeds with registration if validation is passed
    axios.post('http://localhost:3001/register', {
      userName: userName.trim(),
      gbcId: gbcId.trim(),
      password: password
    }).then(response => {
      if (response.data.err) {
        console.log(response);
        setRegistrationStatus('Registration failed. Please try again.');
      } else {
        setRegistrationStatus('User registered successfully!');
        setTimeout(() => {
          navigate('/login'); // Redirect to login page after 1 seconds
        }, 1000);
      }
    }).catch(error => {
      console.error('Registration error:', error);
      setRegistrationStatus('Registration failed. Please try again.');
    });
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Register for Tangello</h1>
        <input
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className="checkbox-container">
      <input
        type="checkbox"
        id="consentCheckbox"
        checked={consent}
        onChange={(e) => setConsent(e.target.checked)}
      />
      <label htmlFor="consentCheckbox">I agree to the terms and conditions</label>
    </div>

        <button onClick={register}>Register</button>
        <h3>Already have an account?</h3>
        <button onClick={goToLogin}>Login</button>
        <h3>{registrationStatus}</h3>
      </div>
    </div>
  );
}

export default Register;
