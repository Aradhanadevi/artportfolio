import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    {/* LOGO */}
    <div className="logo">Aradhana</div>

    {/* NAV LINKS */}
    <ul className="nav-links">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#gallery">Gallery</a>
      </li>
      <li>
        <a href="#contact" className="contact-btn">
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
