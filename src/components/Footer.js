// src/components/Footer.js
import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Future Flicks. All rights reserved.</p>
      <nav>
        <a href="#app" onClick={() => window.scrollTo(0, 0)}>Home</a>
        <a href="#links" onClick={() => window.scrollTo(0, 0)}>Links</a>
        <h1>~ Thanks for Visiting ~</h1>
      </nav>
    </footer>
  );
}

export default Footer;
