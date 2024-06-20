// src/components/Footer.js
import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Future Flicks. All rights reserved.</p>
      <nav className='navbar'>
            <NavLink to ="/app" activeClassName="active-link">
                Home
            </NavLink>
            <h1>~ We got The Movies ~</h1>
            <NavLink to="/LinksPage" activeClassName="active-link">
                Links
            </NavLink>
        </nav>
    </footer>
  );
}

export default Footer;
