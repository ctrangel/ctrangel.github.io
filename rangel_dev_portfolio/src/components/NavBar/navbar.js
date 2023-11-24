import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <img src="" alt="" />
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
