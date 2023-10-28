import React, {useRef} from 'react';
import '../style/NavBar.css'; 
import {Link} from 'react-router-dom'; 
import '../style/SideNav.css';

function NavBar() {
  
  const sideNav = useRef(null);
  const mainNav = useRef(null);

  const openNav = () => {
    sideNav.current.style.width = "300px";
  }

  const closeNav = () => {
    sideNav.current.style.width = "0";
  }

  return (
    <>
      <nav ref={mainNav} className="navbar">
        <span
              onClick={openNav} // Call openNav function on click
            >
              &#9776;
        </span>
      </nav>

      <nav className="navbar-spacer"></nav>
      
    <div ref={sideNav} id="mySidenav" className="sidenav">
      <p className="closebtn" onClick={closeNav}>&times;</p>
      <Link to="/">About</Link>
      <Link to="#">Maps of Arable Land</Link>    
      <a style={{paddingLeft: "50px"}} href="/arable-land-map/2005"> 2005</a>
      <a style={{paddingLeft: "50px"}} href="/arable-land-map/2010"> 2010</a>
      <a style={{paddingLeft: "50px"}} href="/arable-land-map/2019"> 2019</a>
      <a href="#">Maps of Forest Cover</a>    
      <a style={{paddingLeft: "50px"}} href="/forest-land-map/2005"> 2005</a>
      <a style={{paddingLeft: "50px"}} href="/forest-land-map/2010"> 2010</a>
      <a style={{paddingLeft: "50px"}} href="/forest-land-map/2019"> 2019</a>
      <a href="#">Maps of Permanent Crops</a>    
      <a style={{paddingLeft: "50px"}} href="/permanent-crops-land-map/2005"> 2005</a>
      <a style={{paddingLeft: "50px"}} href="/permanent-crops-land-map/2010"> 2010</a>
      <a style={{paddingLeft: "50px"}} href="/permanent-crops-land-map/2019"> 2019</a>
    </div>
    </>
  );
}

export default NavBar;