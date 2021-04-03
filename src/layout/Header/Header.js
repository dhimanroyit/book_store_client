import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {signInContext} from '../../context/SignInContext';
import Avatar from '../../components/Avatar/Avatar';
import './Header.css';

function Header() {
  const {signInUser} = useContext(signInContext)
  return (
    <header className="header container">
      <h2 className="logo">BookStore</h2>
      <nav className="nav">
        <Link to="/" className="nav__item">Home</Link>
        <Link to="/orders" className="nav__item">Orders</Link>
        <Link to="/admin" className="nav__item">Admin</Link>
        <Link to="/deals" className="nav__item">Deals</Link>
        <Link to="/checkout" className="nav__item">Checkout</Link>
        {signInUser.signIn ? <Avatar img={signInUser.photo} /> : <Link to="/signin" className="nav__item">Login</Link>}
      </nav>
    </header>
  )
}

export default Header
