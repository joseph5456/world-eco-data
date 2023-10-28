import React from 'react';
import { Link } from 'react-router-dom';
import '../style/NavBar.css'

function NavBar() {
  return (

    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/world-map/2017" className="navbar-link">World map</Link>
        </li>
        <li className="navbar-item">
          <Link to="/StatesMap" className="navbar-link">States map</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;