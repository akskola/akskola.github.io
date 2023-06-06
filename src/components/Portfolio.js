import React, { useState } from "react";
import "./Portfolio.css";
import asu_logo from "../images/asu_logo.png";
import oracle_logo from "../images/oracle_logo.png";
import voycefirst_logo from "../images/voycefirst_logo.png";
import june_transcript from "../docs/June_transcript.pdf";

function Portfolio() {
  const [activeSection, setActiveSection] = useState("work");

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="portfolio">
      {/* <div
        className="background"
        style={{
          backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`,
        }}
      /> */}

      <div className="content-wrapper">
        <div className="buttons">
          <button
            onClick={() => handleButtonClick("work")}
            className={activeSection === "work" ? "active" : ""}
          >
            Work Experience
          </button>
          <button
            onClick={() => handleButtonClick("projects")}
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </button>
          <button
            onClick={() => handleButtonClick("education")}
            className={activeSection === "education" ? "active" : ""}
          >
            Education
          </button>
          <button
            onClick={() => handleButtonClick("hobbies")}
            className={activeSection === "hobbies" ? "active" : ""}
          >
            Hobbies
          </button>
        </div>

        {/* Work Experience section */}
        <section
          className={`section ${activeSection === "work" ? "active" : ""}`}
        >
          <div className="content">
            <h2>Work Experience</h2>
            <ul>
              <div className="company-logo-1">
                <img src={asu_logo} alt="ASU Logo" />
              </div>
              <li className="experience">
                <div className="experience-header">
                  <h3>Research Aide, Arizona State University</h3>
                  <p> May 2023 - Present</p>
                </div>
                <p>Location: Tempe, AZ</p>
                <ul>
                  <li>
                    Spearheaded the design and development of the Knowledge
                    Alliance Tool to revolutionize collaboration and resource
                    discovery for ASU faculty and community experts.
                  </li>
                  <li>
                    Revamped the user interface (UI) of the current ASP.NET
                    codebase through the migration to React JS, yielding notable
                    improvements in performance, user-friendliness, and
                    scalability.
                  </li>
                  <li>
                    Restructured legacy data access layers and incorporated
                    API-based architecture to optimize search engine
                    functionality and streamline collaboration processes.
                  </li>
                </ul>
              </li>
              <div className="company-logo-2">
                <img src={oracle_logo} alt="Oracle Logo" />
              </div>
              <li className="experience">
                <div className="experience-header">
                  <h3>Applications Developer, Oracle India Private Limited</h3>
                  <p>June 2019 - July 2022</p>
                </div>
                <p>Location: Hyderabad, India</p>
                {/* <h3>Applications Developer, Oracle India Private Limited</h3>
                <p>Location: Hyderabad, India</p>
                <p>June 2019 - July 2022</p> */}
                <ul>
                  <li>
                    Facilitated Agile Development of Cost module in ‘Oracle
                    Aconex’ by performing various feature enhancements on both
                    front-end and back-end using AngularJS and Java, delivering
                    over 35+ full production releases to top-account customers.​
                  </li>
                  <li>
                    Significantly contributed to the enhancement of Redwood UI,
                    a cutting-edge theme designed to revitalize the coloring,
                    layout, and overall user experience of Aconex, resulting in
                    a modernized interface for improved customer satisfaction.
                  </li>
                  <li>
                    Improved core functionality and performance of real-time
                    budget calculations which resulted in 2 times faster average
                    response time. Refactored Java code and increased JUnit
                    coverage by 50%.
                  </li>
                </ul>
              </li>
              <div className="company-logo-3">
                <img src={voycefirst_logo} alt="VoyceFirst Logo" />
              </div>
              <li className="experience">
                <div className="experience-header">
                  <h3>Software Developer Intern, VoyceFirst</h3>
                  <p>June 2018 - July 2018</p>
                </div>
                <p>Location: Hyderabad, India</p>
                <ul>
                  <li>
                    Developed Amazon Alexa Skills with Alexa Skill Kit (ASK),
                    which is a collection of APIs for creating a voice
                    interaction model using AWS services like AWS Lambda, for
                    running the JavaScript code virtually, and Amazon S3, for
                    cloud storage.
                  </li>
                  <li>
                    Published three Alexa skills – Guess the song, Anagramania,
                    and Are you smarter than a 7th grader? - which are now live
                    on Amazon’s website.
                  </li>
                  <li>
                    Collaborated with a group of five senior developers to build
                    ‘Qvick,’ a smart voice assistant that enables guests at
                    hotels to place service requests and other complaints using
                    simple voice commands.
                  </li>
                </ul>
              </li>
              {/* Add other work experiences here */}
            </ul>
          </div>
        </section>

        {/* Projects section */}
        <section
          className={`section ${activeSection === "projects" ? "active" : ""}`}
        >
          <div className="content">
            <h2>Projects</h2>
            <ul>
              <li className="project">
                <div className="project-header">
                  <h3>MealMatch - a Decision Making app</h3>
                  <div className="project-buttons">
                    <a
                      href="https://akskola.github.io/meal-match/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button"
                    >
                      Hosted URL
                    </a>
                    <a
                      href="https://github.com/akskola/meal-match"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button"
                    >
                      Code Repository
                    </a>
                  </div>
                </div>
                <ul>
                  <li>
                    Developed a React JS and Firebase solution for a
                    decision-making app, facilitating the selection of dining
                    venues among friends with diverse culinary preferences.
                  </li>
                  <li>
                    Integrated the Yelp API to fetch an extensive list of
                    restaurants, enabling users to vote on their preferred
                    choices. Implemented essential features such as link
                    sharing, requiring friends to vote on the shared options.
                  </li>
                </ul>
              </li>
              <li className="project">
                <div className="project-header">
                  <h3>Hangman Game</h3>
                  <div className="project-buttons">
                    <a
                      href="https://akskola.github.io/hangman-game/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button"
                    >
                      Hosted URL
                    </a>
                    <a
                      href="https://github.com/akskola/hangman-game"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button"
                    >
                      Code Repository
                    </a>
                  </div>
                </div>
                <ul>
                  <li>
                    Designed and Developed a sophisticated Hangman game
                    utilizing React JS, and Firebase, leading to a seamless user
                    experience for a diverse player base of over 200
                    individuals.
                  </li>
                  <li>
                    Collaborated with a team of 3 to develop and optimize the
                    frontend interface and backend code for the game,
                    successfully integrating dynamic features including
                    real-time scoring updates and single-session game sharing
                    functionality.
                  </li>
                </ul>
              </li>
              <li className="project">
                <div className="project-header">
                  <h3>XChange - a knowledge sharing Q&A platform</h3>
                </div>
                <ul>
                  <li>
                    Devised an interactive model for Question and Answers, using
                    React JS, that connects customers with the support and
                    product development teams across the organization to
                    collaborate and share knowledge on best practices in the
                    construction industry.
                  </li>
                  <li>
                    Implemented features such as ‘post a question,’ ‘search
                    related questions,’ ‘upvote/downvote answers,’ etc.
                  </li>
                </ul>
              </li>
              <li className="project">
                <div className="project-header">
                  <h3>Alexa Home Security and Automation</h3>
                </div>
                <ul>
                  <li>
                    Researched about the common problems that blind people face
                    and built an Alexa skill set, which runs face recognition
                    algorithms and informs the blind user about the person or
                    items present in front of the camera with up to 90%
                    accuracy.
                  </li>
                  <li>
                    It also allows the user to control smart home appliances
                    such as fan, light, AC, etc. by giving voice commands.
                  </li>
                </ul>
              </li>
              <li className="project">
                <div className="project-header">
                  <h3>Cloud music player</h3>
                  <div className="project-buttons">
                    <a
                      href="https://bitbucket.org/akshaykola/viberr-cloud-music-player/src/master/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button"
                    >
                      Code Repository
                    </a>
                  </div>
                </div>
                <ul>
                  <li>
                    Developed an application that allows users to upload, store
                    and play all of their music from the cloud, and can be
                    managed from any device, anywhere in the world.
                  </li>
                  <li>
                    Enhanced the security of the app by adding two-step
                    authentication.
                  </li>
                </ul>
              </li>
              <li className="project">
                <div className="project-header">
                  <h3>LUGO – a Ride Booking Service</h3>
                  <div className="project-buttons">
                    <a
                      href="https://bitbucket.org/akshaykola/lugo-ride-booking-service/src/master/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button"
                    >
                      Code Repository
                    </a>
                  </div>
                </div>
                <ul>
                  <li>
                    Developed a web application for students living on the
                    college campus to book or schedule an auto-rickshaw ride,
                    directly from their hostels to various locations in the
                    city.
                  </li>
                </ul>
              </li>

              {/* Add other notable projects here */}
            </ul>
          </div>
        </section>

        {/* Education section */}
        <section
          className={`section ${activeSection === "education" ? "active" : ""}`}
        >
          <div className="content">
            <h2>Education</h2>
            <ul>
              <div className="company-logo-1">
                <img src={asu_logo} alt="ASU Logo" />
              </div>
              <li>
                <h3>Master of Computer Software Engineering</h3>
                <p>Arizona State University, AZ</p>
                <p>Aug 2022 - May 2024</p>
                <p>GPA: 4.0/4.0</p>
                <a
                  href={june_transcript}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transcripts-button"
                >
                  View Transcripts
                </a>
              </li>
              {/* Add other educational qualifications here */}
            </ul>
          </div>
        </section>

        {/* Hobbies section */}
        <section
          className={`section ${activeSection === "hobbies" ? "active" : ""}`}
        >
          <div className="content">
            <h2>Hobbies</h2>
            <ul>
              <li>
                In my leisure time, I enjoy engaging in <strong>dancing</strong>{" "}
                and <strong>video editing</strong>. Throughout my undergraduate
                studies, I actively participated in my college's official dance
                crew, which allowed us to embark on numerous trips to other
                colleges for competitions. Remarkably, we achieved significant
                success in these competitions. Concurrently, I took on the
                responsibility of managing our dance team's YouTube channel. I
                consistently edited and uploaded videos, leading to a
                substantial increase in subscribers, surpassing 45,000 during my
                tenure. Engaging in creative pursuits like video editing not
                only nurtured my passion but also enhanced my understanding of
                design, user experience and front-end workflows.
              </li>
            </ul>
          </div>
        </section>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
}

export default Portfolio;
