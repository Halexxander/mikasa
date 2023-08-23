import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPlus, FaFolderOpen, FaEnvelope, FaSearch, FaUser } from "react-icons/fa";
import { FiLogIn } from 'react-icons/fi'
import "./Navstyle.css"; //
import screen from "../assets/screen.jpg"
const Navbar = () => {

  const toggleNav = () => {

  }

  return (


    <div>
      {/* <div className="toggleNav" onClick={toggleNav}><FaBars/></div> */}
      <div className="sidebar">
        <div className="logo">
          <img src={screen} alt="logo yeeted to backrooms" />
        </div>

        <ul>
          <li>
            <Link to="/" title="Home">
              <FaHome />Home
            </Link>
          </li>
          <li>
            <Link to="/create" title="About">
              <FaPlus />Create
            </Link>
          </li>
          <li>
            <Link to="/projects" title="Projects">
              <FaFolderOpen /> Project
            </Link>
          </li>
          <li>
            <Link to="/contact" title="Contact">
              <FaEnvelope />Contact
            </Link>
          </li> <li>
            <Link to="/search" >
              <FaSearch />Search
            </Link>
          </li>

          <li>
            <Link to="/login"
            ><FiLogIn /></Link>
            <Link to="/signup"
            > <FaUser /></Link>
          </li>

        </ul>
      </div></div>
  );
};

export default Navbar;
