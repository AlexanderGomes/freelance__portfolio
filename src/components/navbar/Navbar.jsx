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
          <Link to="project" smooth={true}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true}>
            Work
          </Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:alexsandergomeshamir@gmail.com"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};



export default Navbar;
