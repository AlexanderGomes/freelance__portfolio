import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="main">
      <div className="logo">
        <p>A2G</p>
      </div>
      <ul className="nav__links">
        <li>
          {" "}
          <Link to="testimonial" smooth={true}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="mission" smooth={true}>
            Mission
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true}>
            Work
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
