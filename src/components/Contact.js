import React, { useState } from "react";
import "./Contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_k7lb5ow",
        "template_47imxzy",
        {
          from_name: name,
          message:
            "Subject: " +
            subject +
            "\nEmail: " +
            email +
            "\nMessage: " +
            message,
          reply_to: email,
        },
        "VdegdfXtC4anI53CU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccessMessage(true); // Show the success message
          setTimeout(() => {
            setShowSuccessMessage(false); // Hide the success message after 3 seconds
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          // Optionally, you can display an error message
        }
      );

    // Reset the form fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="contact">
      <span className="contact-title">Contact Me</span>
      <p>Open for opportunities. Let's connect and build something amazing together!</p>
      <div className="contact-container">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Contact Information</h2>
          
          <p>
            <i className="fas fa-user"></i> Akshay Reddy Kola
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Tempe, AZ
          </p>
          <p>
            <i className="fas fa-envelope"></i> akola1@asu.edu
          </p>
        </div>
        {showSuccessMessage && (
          <div className="success-message">
            <p>Message sent successfully!</p>
          </div>
        )}
      </div>
      <div className="social-icons-contact">
      <span className="em-dash">——</span>
        <a
          href="https://github.com/akskola"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/akshaykola/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://www.instagram.com/akskola/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" />
        </a>
        <a
          href="https://www.youtube.com/@AkshayKola/featured"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="icon" />
        </a>
        <span className="em-dash">——</span>
      </div>
    </div>
  );
};

export default Contact;
