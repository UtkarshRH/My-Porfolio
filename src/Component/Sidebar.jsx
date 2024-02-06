// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../Component/Sidebar.module.css";

const Sidebar = ({ isOpen, onClose }) => {
  const variants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  return (
    <motion.div
      className="sidebar"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <ul>
        <li>
          <Link to="/" onClick={onClose}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={onClose}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={onClose}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={onClose}>
            Contact
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
