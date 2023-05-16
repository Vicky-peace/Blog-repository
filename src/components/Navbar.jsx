import React from 'react';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
       
      <ul className="nav-links">
        <li> <h1 className="logo">@BlogPostTech</h1></li>
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/blog" className="nav-link">Blog</a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
