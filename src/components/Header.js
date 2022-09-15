import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div>
      <h1>Bookstore CMS</h1>
      <nav>
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
