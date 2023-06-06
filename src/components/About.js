import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import about_img from "../images/about_img.jpg";
import resume from "../docs/resume.pdf";

const About = () => {
  const openResumeInNewTab = () => {
    window.open("https://your-resume-link-goes-here", "_blank");
  };

  return (
    <div className="about">
      <span className="item-title">About Me</span>
      <div className="about-container">
        <div className="about-image">
          <img src={about_img} alt="About Me"></img>
        </div>
        <div className="about-text">
          <span className="about-tagline-1">Let me introduce myself</span>
          <span className="about-tagline-2">
            I'm Akshay, a Software Engineer dedicated to designing remarkable
            digital experiences!
          </span>
          <span className="about-tagline-3">
            With over 3 years of professional work experience and a distinctive
            combination of technical prowess, imaginative ideation, and a
            background in creative domains like video editing, I bring a
            holistic approach to every project which enables me to empathize
            with the end user's viewpoint and create highly impactful,
            user-centric digital products.
          </span>
          <div className="about-details">
            <div>
              <span>
                Name:{" "}
                <span className="about-details-value">Akshay Reddy Kola</span>
              </span>
              <span>
                Location:{" "}
                <span className="about-details-value">Tempe, Arizona, US</span>
              </span>
            </div>
            <div>
              <span>
                Email:{" "}
                <a href="mailto:akola1@asu.edu" className="about-details-email">
                  akola1@asu.edu
                </a>
              </span>
              <span>
                Availability:{" "}
                <span className="about-details-value">Open to work</span>
              </span>
            </div>
          </div>
          <div className="button-container">
            <button
              onClick={() => window.open(resume, '_blank')}
              className="view-resume-button"
            >
              View Resume
            </button>
            <Link to="/portfolio" className="view-portfolio-button">
              View Portfolio
            </Link>
            {/* <span className="about-details-value">——————</span> */}
            <div className="social-icons">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
