import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./Animation.css";

const Plan = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      animationData: require("../../assets/animation.json"),
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
  }, []);

  return <div className="container" ref={container}></div>;
};

export default Plan;
