// HireMe.js
import React from "react";
import { Link } from "react-router-dom";
import Style from "../Style/hire.module.css";

const HireMe = () => {
  return (
    <div className={Style.superContainer}>
      <div className={Style.container}>
        <h1>Ready to Elevate Your Project?</h1>
        <h2>Hire Me!</h2>
        <p>
          With a passion for crafting seamless digital experiences and expertise
          in cutting-edge technologies, I am here to bring your ideas to life.
          Let's work together to create something amazing!
        </p>
        <Link to="/contact">
          <button>Contact Me</button>
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
