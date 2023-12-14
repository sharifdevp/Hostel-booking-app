import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
          <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
          <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

