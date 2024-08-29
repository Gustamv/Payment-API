// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Melinho Payments</h1>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/pagamento" className="nav-link">Pagamento</Link>
        </li>
        <li className="nav-item">
          <Link to="/sobre" className="nav-link">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;