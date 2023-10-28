import React from 'react';
import '../style/SideNav.css';

function SideNav() {
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
}

export default SideNav;