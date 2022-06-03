import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul className="nav justify-content-center">

        <Link to="/" />

        <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="./">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="./about">About</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="./login">Login</NavLink>
        </li>
    </ul>
  )
}

export default NavBar;