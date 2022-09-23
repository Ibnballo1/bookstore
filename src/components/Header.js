import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="headers">
    <div className="logo-nav">
      <h1 className="logo">Bookstore CMS</h1>
      <nav className="nav">
        <Link to="/">Books</Link>
        <Link to="categories">Categories</Link>
      </nav>
    </div>
    <div>
      <i>Profile Pics</i>
    </div>
  </header>
);

export default Header;
