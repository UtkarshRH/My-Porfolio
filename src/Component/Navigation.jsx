// Navigation.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfo,
  faProjectDiagram,
  faEnvelope,
  faBars, // Added bars icon
} from "@fortawesome/free-solid-svg-icons";
import Style from "../Component/Navigation.module.css";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={isMobileMenuOpen ? `${Style.nav} ${Style.mobileNav}` : Style.nav}>
      <div className={Style.mobileIcon} onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={isMobileMenuOpen ? `${Style.navList} ${Style.showMobileMenu}` : Style.navList}>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FontAwesomeIcon icon={faInfo} />
            About
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <FontAwesomeIcon icon={faProjectDiagram} />
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
            Contact
          </Link>
        </li>
        {/* <li>
          <Link to="/hireme">
            <FontAwesomeIcon icon={faHandshake} />
            Hire Me
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
