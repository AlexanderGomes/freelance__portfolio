import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero__main">
      <div className="hero__left">
        <h1>using technology to solve real world problems</h1>
        <p>
          I'm Alexsander Hamir, a full-stack developer specializing in backend
          engineering.
        </p>
      </div>
      <div className="hero__bottom">
        <p>Worked with:</p>
        <div className="down-arrow"></div>
      </div>
      <div className="companies">
        <div className="companies__info">
          <div>
            <p>Connective</p>
          </div>
          <div>
            <p>Stellar Career</p>
          </div>
          <div>
            <p>River Tech</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;