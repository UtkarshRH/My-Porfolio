// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/pages/Home";
import AboutMe from "./Component/pages/AboutMe";
import Projects from "./Component/pages/Project";
import Contact from "./Component/pages/Contact";
// import HireMe from "./Component/pages/Hire";
import Navigation from "./Component/Navigation";
import "./App.css";
import Footer from "./Component/pages/Footer";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/hireme" element={<HireMe />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
