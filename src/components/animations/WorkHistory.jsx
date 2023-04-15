import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./Animation.css";

const WorkHistory = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      animationData: require("../../assets/work.json"),
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
  }, []);

  return <div className="container__work" ref={container}></div>;
};

export default WorkHistory;
