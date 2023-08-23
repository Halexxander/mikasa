import { useState } from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import "./Contactstyle.css"
const ContactPage = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form>
       
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

      

        <button type="submit">Submit</button>
      </form>

      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <div className={`social-icon ${hovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <FiFacebook />
          </div>
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <div className={`social-icon ${hovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <FiTwitter />
          </div>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <div className={`social-icon ${hovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <FiInstagram />
          </div>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <div className={`social-icon ${hovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <IoLogoLinkedin />
          </div>
        </a>
        <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
          <div className={`social-icon ${hovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <IoLogoGithub />
          </div>
        </a>
      </div>

      <p className="footer">All rights reserved. </p>
    </div>
  );
};

export default ContactPage;
