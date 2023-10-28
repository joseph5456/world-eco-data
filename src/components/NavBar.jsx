import React from 'react';
import { Link } from 'react-router-dom';
import '../style/NavBar.css'; // Import or create a CSS file for styling
import SideNav from './SideNav'; // Import the SideNav component
import React, { useEffect } from 'react';

function NavBar() {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
        <span
              style={{ fontSize: '30px', cursor: 'pointer' }}
              onClick={openNav} // Call openNav function on click
            >
              &#9776; open
            </span>
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

      <nav className="navbar-spacer"></nav>
      
      <SideNav /> {function SideNav() {
  const openNav = () => {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  };

  const closeNav = () => {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  };

  return (
    <div id="mySidenav" className="sidenav">
      <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
      <a href="#">About</a>
      <a href="#">Home</a>
      <a href="#">World Map</a>    
    </div>
  );
}}
    </>
  );
}

export default NavBar;