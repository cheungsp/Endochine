import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

function Header () {
  return (
    <ul className="nav">
      <li>
        <NavLink activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/cart'>
          Cart
        </NavLink>
      </li>
    </ul>
  )
}

export default Header;
