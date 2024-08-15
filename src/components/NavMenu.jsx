import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext'; // Import AuthContext
import './NavMenu.css';

function NavMenu({ toggleMenu }) {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext); 

  const handleCloseMenu = () => {
    toggleMenu();
    navigate('/');
  };

  const handleProfileClick = () => {
      toggleMenu();
      navigate('/profile');
  };

  return (
    <div className="nav-menu-overlay">
      <div className="nav-menu-header">
        <img src='./logo-white.png' alt="Tangello Logo" className="logo" />
        <div className="close-menu" onClick={handleCloseMenu}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      <div className="nav-menu">
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/wellbeing" onClick={toggleMenu}>Tangello Care</Link></li>
          <li><Link to="/tangello-place" onClick={toggleMenu}>Tangello Place</Link></li>
          <li><Link to="/nearyouzone" onClick={toggleMenu}>Near Me</Link></li>
          {user ? (
            <>
              <li><span onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
                Welcome, {user.userName || 'User'} 
                </span></li>
              </>
          ) : (
            <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default NavMenu;
