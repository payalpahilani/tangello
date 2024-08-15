import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="copyright">COPYRIGHT © 2024 TANGELLO</p>
      <p className="rights">All Rights Reserved</p>
      <p className="policies">
        <a href="/terms-and-conditions">Terms and Conditions</a> | <a href="/privacy-policy">Privacy Policy</a>
      </p>
    </footer>
  );
}

export default Footer;
