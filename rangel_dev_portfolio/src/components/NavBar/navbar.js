import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <button className="navbarToggle" id="js-navbar-toggle">
      <img className='toggle' src='rangel_dev_portfolio\src\assets\toggler.png' alt='toggle menu'/>
      </button>
      <div className="links">
        <Link className="desktopMenuListItem" to="/">Home</Link>
        <Link className="desktopMenuListItem" to="/about">About</Link>
        <Link className="desktopMenuListItem" to="/projects">Projects</Link>
        <Link className="desktopMenuListItem" to="/education">Education</Link>
        <Link className="desktopMenuListItem" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
