import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header className="headers">
    <div className="logo-nav">
      <h1 className="logo">Bookstore CMS</h1>
      <nav className="nav">
        <Link className="nav-book" to="/">Books</Link>
        <Link className="nav-category" to="categories">Categories</Link>
      </nav>
    </div>
    <div className="profile-container">
      <FontAwesomeIcon className="user" icon={faUser} />
    </div>
  </header>
);

export default Header;
