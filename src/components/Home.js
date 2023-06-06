import React, { useState, useEffect } from "react";
import "./Home.css";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [texts, setTexts] = useState(["Welcome to my portfolio.", "Code. Create. Deploy."]);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typedText === texts[currentIndex]) {
        setTimeout(() => {
          const nextIndex = (currentIndex + 1) % texts.length;
          setCurrentIndex(nextIndex);
          setTypedText("");
        }, 5000);
      } else {
        const currentText = texts[currentIndex];
        const newTypedText = currentText.slice(0, typedText.length + 1);
        setTypedText(newTypedText);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, typedText, texts]);

  return (
    <div className="home">
      <div className="background" style={{ transform: `translate(${mousePosition.x / 90}px, ${mousePosition.y / 90}px)` }}>
        {/* Add your background image here */}
      </div>
      <div className="home-content-wrapper">
        <h1>Akshay Reddy Kola</h1>
        <p className="typewriter">
          {typedText}
          <span className="cursor" />
        </p>
      </div>
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
  );
};

export default Home;
