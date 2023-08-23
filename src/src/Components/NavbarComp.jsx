import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';

import "./Navstyle.css";

const Navbar = () => {
  const [navgeneral, showNavgeneral] = useState(false);
  const navRef = useRef(null);

 

  const toggleNav = () => {
    showNavgeneral(!navgeneral)};

  // This effect will add a click event listener to the document to close the menu when clicked outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        showNavgeneral(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className={`navgeneral ${navgeneral ? "open" : ""}`} ref={navRef}>
      <h4 id="h41">Alex<h4 id="h42">.Js</h4></h4>

      <div className={`hamburger-icon ${navgeneral ? "active" : ""}`}>
        <GiHamburgerMenu onClick={() => showNavgeneral(!navgeneral)}/>  
      </div>



      {navgeneral && (
        <ul className="desktop-menu">
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/about">About</Link>
          </li>
          <li>
            <Link className="link" to="/projects">My Projects</Link>
          </li>
          <li>
            <Link className="link" to="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
