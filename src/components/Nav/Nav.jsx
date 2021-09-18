import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {

  return (
    <div className="nav-base">
      <div className="nav-brandName">
        <Link className="link-black" to="/">
          Kindle <span>.</span>
        </Link>
      </div>
      <div className="flex-end">
        <div className="nav-search">
          <input type="search" autocomplete="off" id="nav-search-input" name="search-bar" aria-label="Nav Search Bar" placeholder="Search your books" />
        </div>
        <div className="nav-item">New Release <sup>&bull;</sup> </div>
        <div className="nav-item">
          <Link className="link-black" to="login">Sign In</Link>
        </div>
      </div>
    </div>
  )
} 

export default Nav;