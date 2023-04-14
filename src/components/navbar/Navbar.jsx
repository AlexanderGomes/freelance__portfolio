import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="main">
      <div className="logo">
        <p>A2G</p>
      </div>
      <ul className="nav__links">
        <li>Testimonials</li>
        <li>Mission</li>
        <li>Projects</li>
      </ul>
    </div>
  );
};

export default Navbar;
