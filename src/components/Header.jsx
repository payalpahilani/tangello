import React, { useState } from 'react';
import './Header.css';
import NavMenu from './NavMenu'; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
      <img src='./logo-white.png' alt="Tangello Logo" />
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      {isMenuOpen && <NavMenu toggleMenu={toggleMenu}/>}
    </header>
  );
}

export default Header;
