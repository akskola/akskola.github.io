import React, { useState, useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import './NavMenu.css';
import aks_logo from "../images/aks_logo.png";

const NavMenu = () => {
  const [activeItem, setActiveItem] = useState("");
  const location = useLocation();

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/") {
      setActiveItem("home");
    } else if (currentPath === "/about") {
      setActiveItem("about");
    } else if (currentPath === "/portfolio") {
      setActiveItem("portfolio");
    } else if (currentPath === "/contact") {
      setActiveItem("contact");
    }
  }, [location.pathname]);

  return (
    <header>
      <img className="logo" src={aks_logo} alt="Akshay Kola Logo"></img>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={activeItem === "home" ? "active" : ""}
              onClick={() => handleItemClick("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={activeItem === "about" ? "active" : ""}
              onClick={() => handleItemClick("about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={activeItem === "portfolio" ? "active" : ""}
              onClick={() => handleItemClick("portfolio")}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={activeItem === "contact" ? "active" : ""}
              onClick={() => handleItemClick("contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavMenu;
