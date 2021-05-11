import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
    <li>
    <NavLink
      to="/"
    >Home</NavLink>
    </li>
    <li>
    <NavLink
      to="/song-list"
      exact
    >Song List</NavLink>
    </li>
    <li>
    <NavLink
      to="/song-form"
    >Add a Song</NavLink>
    </li>
    </div>
  );
};

export default NavBar;