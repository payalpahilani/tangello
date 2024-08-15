import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/login', { withCredentials: true })
      .then(response => {
        if (response.data.loggedIn) {
          setUser(response.data.user);
        }
      })
      .catch(error => {
        console.error('Error during session check:', error);
      });
  }, [])

  const login = async (gbcId, password) => {
    try {
      const response = await axios.post('http://localhost:3001/login', { gbcId, password }, { withCredentials: true });
      console.log('Response from server:', response); // Log full response details
      
      if (response.data.user) {
        setUser(response.data.user); // Set user in context
        return { success: true, user: response.data.user };
      } else {
        console.log('Login failed:', response.data.message); // Log message from server
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      console.error('Login error details:', error.response); // Log detailed error response
      return { success: false, message: error.response ? error.response.data.message : 'Login failed' };
    }
  };
  
  

  const logout = async () => {
    try {
      const response = await axios.get('http://localhost:3001/logout', { withCredentials: true });
      if (response.data.message === 'Logout successful') {
        setUser(null);
        return { success: true };
      } else {
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      console.error('Logout error:', error);
      return { success: false, message: 'Logout failed' };
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
