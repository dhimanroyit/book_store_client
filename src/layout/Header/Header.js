import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header container">
      <h2 className="logo">BookStore</h2>
      <nav className="nav">
        <Link to="/" className="nav__item">Home</Link>
        <Link to="/orders" className="nav__item">Orders</Link>
        <Link to="/admin" className="nav__item">Admin</Link>
        <Link to="/deals" className="nav__item">Deals</Link>
        <Link to="/signin" className="nav__item">Login</Link>
      </nav>
    </header>
  )
}

export default Header
