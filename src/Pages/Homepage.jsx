import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa"; // import the sign in icon
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import "./Homepage.css";

const Homepage = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogsCollection = collection(db, "blogs");
      const blogsSnapshot = await getDocs(blogsCollection);
      const blogsList = blogsSnapshot.docs.map(doc => doc.data());
      setBlogs(blogsList);
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.error("An error happened during sign out:", error);
      });
  };

  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Netshack</h1>
        <nav>
          <ul>
            <li>Politics</li>
            <li>LGBTQ+</li>
            <li>Anime</li>
            <li>Dc</li>
            {user ? (
              <li onClick={handleSignOut}><FaSignOutAlt /></li>
            ) : (
              <li><Link to="/login"><FaSignInAlt /></Link></li>
            )}
          </ul>
        </nav>
      </header>

      <main>
        {blogs.map((blog, index) => (
          <div key={index}>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <p>{blog.content}</p>
            {/* Add more blog details as needed */}
          </div>
        ))}
      </main>
    </div>
  );
};

export default Homepage;