import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import './Profile.css';

function Profile() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className='profile-container'>
       <div className="profile-card">
        <div className="profile-image">
          {user.userName.charAt(0).toUpperCase()}
        </div>
        <div className="profile-info">
          <div className="profile-name">
            <div>{user ? user.userName : ""}</div>
            <div>{user ? user.gbcId : ""}</div>
          </div>
          <div className="profile-barcode">
            <img src="barcode.png" alt="barcode" className="barcode-image" />
          </div>
        </div>
      </div>
      <button className="profile-logout" onClick={handleLogout}>Logout</button>
     
    </div>
  );
}

export default Profile;
