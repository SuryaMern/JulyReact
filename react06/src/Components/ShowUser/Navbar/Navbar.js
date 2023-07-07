import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='container'>
    <nav className="navbar">
      <h1 className="title">Navbar</h1>
      <ul className="list">
        <li className="item">
          <a href="/" className="link">Home</a>
        </li>
        <li className="item">
          <a href="/" className="link">User</a>
        </li>
      </ul>
    </nav>
    <div className="content">
        {/* Content */}
      </div>

      <footer className="footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default Navbar;
