/* AboutMe.js */
import React from "react";
import Style from "../Style/AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={Style.hero}>
      <h2>🚀 About Me</h2>
      <p>
        Welcome to my universe of coding creativity! I'm Utkarsh, a relentless explorer in the digital realm,
        sculpting lines of code into innovative web experiences.
      </p>
      <p>
        As a Computer Science enthusiast and a web developer, I hold a degree in Computer Science. During my academic
        journey, I've delved into various courses, covering topics such as algorithms, data structures, and database management.
        This academic background has provided me with a solid foundation in software development and problem-solving.
      </p>

      {/* Education Section */}
      <div className={Style.education}>
        <h3>Education</h3>
        <p>
          <strong>K.D.k college of Engineering Nagpur</strong>
          <br />
          Graduation :{/* Added graduation title */}
          <br />
          Aug-2019 - Jul-2023 | Nagpur-Maharashtra
          <br />
          Bachelor of Engineering (B.E) {/* Added graduation title */}
          <br />
        </p>
        <p>
          <strong>Nandlal Patil Kapgate Jr. College Sakoli</strong>
          <br />
          12th : {/* Added graduation title */}
          <br />
          Aug-2018 - Mar-2019 | Sakoli-Maharashtra
          <br />
        </p>
        <p>
          <strong>Pandit Jawaharlal Neharu Vidhyalay Sangadi</strong>
          <br />
          10th: {/* Added graduation title */}
          <br />
          June 2016 - March 2017 | Sangadi-Maharashtra
          <br />
        </p>
      </div>

      {/* Internship Section */}
      <div className={Style.internship}>
        <h3>Internships</h3>

        {/* UI-Designer Internship */}
        <div className={Style.internshipItem}>
          <h4>UI-Designer Internship</h4>
          <p>AnkHub Technology</p>
          <p>22 Nov 2022 - 22 Dec 2022 | Nagpur</p>
          <ul>
            <li>
              During my internship, I worked as a UI designer and actively contributed to various projects, utilizing
              technologies such as HTML, CSS, Bootstrap, and JavaScript.
            </li>
            <li>
              This valuable experience allowed me to gain proficiency in agile methodologies, enabling me to effectively
              collaborate with cross-functional teams and deliver high-quality design solutions.
            </li>
          </ul>
        </div>

        {/* Python Technology Internship */}
        <div className={Style.internshipItem}>
          <h4>Python Technology Internship</h4>
          <p>Crescentweb Technology</p>
          <p>1 Jan 2021 - 1 Jun 2021 | Nagpur</p>
          <ul>
            <li>Completed an Internship as a web developer, gaining hands-on experience in various projects.</li>
            <li>Received training and mentorship in Python technologies with a focus on the Django web framework.</li>
          </ul>
        </div>
      </div>

      <p>
        My practical experience includes an enriching internship as a Ui-Designer, where I honed my skills in web development.
        During this period, I actively contributed to developing and maintaining web applications, gaining valuable insights into
        industry practices.
      </p>
      <p>
        Beyond the screen, I'm fueled by the excitement of learning and the joy of turning ideas into reality. Let's embark
        on a journey where every project is an opportunity to create something extraordinary!
      </p>
      <a href="/projects" className={Style.btn}>
        Explore My Projects
      </a>
    </div>
  );
};

export default AboutMe;
