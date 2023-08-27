import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPlus, FaFolderOpen, FaEnvelope, FaSearch, FaUser } from "react-icons/fa";
import { FiLogIn } from 'react-icons/fi'
import "./Navstyle.css";
import { auth } from "../config/firebase"; // import the auth from your firebase config
import { onAuthStateChanged } from "firebase/auth";
const Navbar = () => {

  const [userPhotoURL, setUserPhotoURL] = useState(null);
  const [user, setUser] = useState(null);
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserPhotoURL(user.photoURL);
      } else {
        setUserPhotoURL(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleMouseOver = (e) => {
      if (e.clientX < 100) { // adjust this value to control the sensitive area
        setSidebarExpanded(true);
      }
    };

    const handleMouseOut = () => {
      setSidebarExpanded(false);
    };

    window.addEventListener('mousemove', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (


    <div>
        <div className={`sidebar ${isSidebarExpanded ? 'expanded' : ''}`}>
        {userPhotoURL ? (
          <div className="logo">
            <img src={userPhotoURL} alt="User" />
          </div>
        ) : null}
       

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

          {!user && (
            <li>
              <Link to="/login"><FiLogIn /></Link>
              <Link to="/signup"> <FaUser /></Link>
            </li>
          )}

        </ul>
      </div></div>
  );
};

export default Navbar;
