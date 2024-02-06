// Contact.js
import React from "react";
import emailjs from 'emailjs-com'; // Import emailjs library
import Style from "../Style/Contact.module.css";

const Contact = () => {

  function sendEmail(event) {
    event.preventDefault();
    const { name, email, message } = event.target.elements;

    const templateParams = {
      from_name: name.value,
      Email_id: email.value,
      Message: message.value,
    };

    emailjs.send("service_vhgbegm", "template_fnapt3i", templateParams, "9D6syG1bMoR-eWb--")
      .then((response) => {
        console.log("Email successfully sent!", response);
        alert("Your message has been sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Oops! Something went wrong. Please try again later.");
      });

    event.target.reset();
  }

  return (
    <div className={Style.contactContainer}>
      <div className={Style.contactForm}>
        <h2>Contact</h2>
        <form onSubmit={sendEmail}>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
