import React from 'react';
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/login" className="nav-link">Login</a></li>
          <li className="nav-item"><a href="/signup" className="nav-link">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

