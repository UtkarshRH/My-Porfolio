// Project.js
import React, { useState } from "react";
import Style from "../Style/Project.module.css";

// Import images
import projectImage1 from "../Assets/javap.png";
import projectImage2 from "../Assets/College Project.png";
import projectImage3 from "../Assets/Simple.png";
import projectImage4 from "../Assets/Amazon.png";
import projectImage5 from "../Assets/WhetherApp.png";
import projectImage6 from "../Assets/flipkart.png"; 
import projectImage7 from "../Assets/NotesApp.png";
// Add more image imports as needed

const projectsData = [
  {
    id: 1,
    title: "Hospital Management System",
    description:
      "The Hospital Management System is a web app using HTML, CSS, Java (JSP, Servlets) for server-side, Java JDBC for database connectivity, and MySQL for the database. It manages patient records, doctor schedules, and appointments, deployed on Apache Tomcat to streamline hospital operations.",
    image: projectImage1,
    link: "https://github.com/UtkarshRH/Hospital-management-project-",
  },
  {
    id: 2,
    title: "Online Blood Bank",
    description:
      "The Online Blood Bank Project, utilizing the MEAN stack, streamlines blood donation processes. Donors and recipients register, creating a centralized database for efficient management. MEAN ensures a scalable architecture.",
    image: projectImage2,
    link: "https://mega-project-vert.vercel.app/home",
  },
  {
    id: 3,
    title: "Simple Ecommerce Site",
    description:
      "The Simple Ecommerce Site, developed with React, HTML, CSS, and JavaScript, utilizes a mock API to dynamically retrieve and display product details. Combining modern technologies, it offers a seamless shopping experience.",

    image: projectImage3,
    link: "https://simple-e-commerce-site-rouge.vercel.app/",
  },
  {
    id: 4,
    title: "Amazon Clone",
    description:
      "The Amazon Clone is an e-commerce store project developed using HTML, CSS, Bootstrap, and JavaScript. It mimics the functionality and design of the Amazon website, offering users a familiar online shopping experience. The project includes features such as dark and light mode options to enhance user customization. ",
    image: projectImage4,
    link: "https://utkarshrh.github.io/Amazon-Light---Dark-mode/",
  },
  {
    id: 5,
    title: "Weather-App",
    description:
      "The Weather-App is a web application created with HTML, CSS, and JavaScript. It utilizes a Weather API to provide real-time weather updates. The application allows users to check current weather conditions and forecasts through an interactive and user-friendly interface.",
    image: projectImage5,
    link: "https://utkarshrh.github.io/Weather-App/",
  },
  {
    id: 6,
    title: "Flipkart Clone",
    description:
      "Designed and implemented a comprehensive Flipkart clone using HTML, CSS, and JavaScript. Noteworthy features include the incorporation of Dark Mode and a Weather App, elevating the user experience for seamless shopping with enhanced functionality.",
    image: projectImage6,
    link: "https://utkarshrh.github.io/Flipkart/",
  },
  {
    id: 7,
    title: "Notes-App",
    description:
      "The Notes App is a project developed using HTML, CSS, and JavaScript. It provides users with the ability to create and store personal notes. The application leverages the local storage feature in JavaScript, allowing users to save and retrieve their notes locally on their device. ",
    image: projectImage7,
    link: "utkarshrh.github.io/Notes-App/",
  },

  // Add more projects with images and links as needed
];

const Project = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <div className={Style.projects}>
      <h2>Projects</h2>
      <div className={Style.projectContainer}>
        {visibleProjects.map((project) => (
          <div key={project.id} className={Style.projectCard}>
            <img
              src={project.image}
              alt={`Project ${project.id}`}
              className={Style.projectImage}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={Style.projectLink}
            >
              View Project
            </a>
          </div>
        ))}
      </div>
      {!showAll && (
        <button
          className={Style.showMoreButton}
          onClick={() => setShowAll(true)}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default Project;
