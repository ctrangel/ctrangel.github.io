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
      </div>
      <button className="desktop-button">
        <img src="" alt="" className="desktopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
}

export default Navbar;
