// Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import logoImage from "../Assets/logo.png";
import Style from "../Style/Footer.module.css";

const Footer = () => {
  return (
    <footer className={Style.footerContainer}>
      <div className={Style.footerContent}>
        <div className={Style.footerLogo}>
          <img src={logoImage} alt="Logo" />
          <p>
            "Building Bridges Between User Interfaces and Java Realms: Where
            Reactivity Meets Robustness in Code Symphony."
          </p>
        </div>
        <div className={Style.footerSocial}>
          <h2>Connect with Me</h2>
          <div className={Style.socialIcons}>
            <a
              href="https://www.linkedin.com/in/utkarsh-harshe-4591121bb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://twitter.com/UtkarshHarshe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://github.com/UtkarshRH"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="your_instagram_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div className={Style.footerBottom}>
        <p>&copy; 2024 All rights reserved.</p>
        <p>Utkarsh Harshe</p>
      </div>
    </footer>
  );
};

export default Footer;
