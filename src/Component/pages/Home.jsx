// Home.js
import React from "react";
import Style from "../Style/Home.module.css";

import htmlLogo from "../Assets/HTML.jpeg";
import cssLogo from "../Assets/CSS.png";
import bootstrapLogo from "../Assets/boostrape.png";
import jsLogo from "../Assets/js.png";
import reactLogo from "../Assets/react.jpeg";
import javaLogo from "../Assets/java.jpg";
import spring from "../Assets/spring.png";
import hibernate from "../Assets/hibernate.png";
import sqlLogo from "../Assets/sql.png";
import profileImage from "../Assets/PassportRem.png";

const Home = () => {
  return (
    <div className={Style.hero}>
      <div className={Style.gridContainer}>
        <div className={Style.profileInfo}>
          <img src={profileImage} alt="Profile" className={Style.profileImage} />
          <h2>Utkarsh Rajendra Harshe</h2>
          <p>Computer Science Enthusiast | Web Developer</p>
          <p>Email: utkarshharshe06@gmail.com</p>
          {/* Add more information as needed */}
        </div>
        <div className={Style.intro}>
          <h1>Welcome to My Portfolio</h1>
          <p>
            Hi, I'm <span className={Style.myName}>Utkarsh Harshe</span>, a passionate web developer
            dedicated to crafting exceptional digital experiences.
          </p>
          <p>
            With a background in computer science, I specialize in creating dynamic and responsive
            websites. My skills range from designing visually appealing interfaces with HTML, CSS,
            and Bootstrap to implementing dynamic functionalities using JavaScript and React.
          </p>
          <p>
            My expertise extends to server-side programming with Java and database management with SQL.
            Explore my projects to witness the exciting journey of technology and creativity.
          </p>
        </div>
      </div>
      <div className={Style.content}>
        <div className={Style.skills}>
          <h2>Skills</h2>
          <div className={Style.skillIcons}>
            <img src={htmlLogo} alt="HTML" className={Style.skillIcon} />
            <img src={cssLogo} alt="CSS" className={Style.skillIcon} />
            <img src={bootstrapLogo} alt="Boostrape" className={Style.skillIcon} />
            <img src={jsLogo} alt="JavaScript" className={Style.skillIcon} />
            <img src={reactLogo} alt="React" className={Style.skillIcon} />
            <img src={javaLogo} alt="Java" className={Style.skillIcon} />
            <img src={spring} alt="Spring" className={Style.skillIcon} />
            <img src={hibernate} alt="Hibernate" className={Style.skillIcon} />
            <img src={sqlLogo} alt="SQL" className={Style.skillIcon} />
            {/* Add more skill logos/images as needed */}
          </div>
        </div>
        <div className={Style.contents}>
          <div className={Style.internshipContainer}>
            {/* Removed Internship and Academics sections */}
          </div>
          <div className={Style.separator}></div>
        </div>
      </div>
      <br/>
      <a href="/projects" className={Style.btn}>
        View Projects
      </a>
    </div>
  );
};

export default Home;
