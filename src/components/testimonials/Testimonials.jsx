import React, { useState } from "react";
import { Proof1, Proof2, Proof3, Goal } from "../../assets";

import "./Testimonials.css";

const Testimonials = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div id="testimonial" className="test__main">
      <div className="test__top">
        <p>What my clients have to say about me?</p>
      </div>
      <div className="star-rating-container">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`star ${value <= rating ? "filled" : ""}`}
            onClick={() => handleRating(value)}
          >
            ★
          </span>
        ))}
      </div>
      <div className="test__link">
        <a
          target="_blank"
          href="https://www.upwork.com/freelancers/~012f708ad6909f11b9"
        >
          Check it out
        </a>
      </div>
      <div className="horizontal_slider">
        <div className="slider_container">
          <div className="card__inner">
            <img src={Proof1} alt="" />
          </div>
          <div className="card__inner">
            <img src={Proof2} alt="" />
          </div>
          <div className="card__inner">
            <img src={Proof3} alt="" />
          </div>
        </div>
      </div>

      <div className="div__rocket">
        <img className="rocket" src={Goal} alt="goal rocket" />
      </div>
    </div>
  );
};

export default Testimonials;
