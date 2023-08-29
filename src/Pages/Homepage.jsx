import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
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
      const blogsList = blogsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
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
              <li onClick={handleSignOut}>
                <FaSignOutAlt />
              </li>
            ) : (
              <li>
                <Link to="/login">
                  <FaSignInAlt />
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
<section className='page-header page-header_default'>
<div className="page-header_container container">
  <div className="page-header_breadcrumbs-container breadcrumbs-container">
<ol className="page-header_controls breadcrumbs breadcrumbs_inverted" itemScope itemType="https://schema.org/BreadcrumbList">
</ol>
  </div>
<div className="page-header_content">

</div>
</div>
</section>
      <main>
        <section className="trending-blogs">
          <h2>Trending Blogs</h2>
          <div className="blog-list">
            {blogs.map((blog) => (
              <Link key={blog.id} to={`/blog/${blog.id}`} className="blog-card">
                <div className="blog-thumbnail">
                  <img src={blog.thumbnail} alt={blog.title} />
                </div>
                <div className="blog-details">
                  <h3>{blog.title}</h3>
                  <p>{blog.author}</p>
                  <p>{blog.date}</p>
                  <p>{blog.content.substring(0, 100)}...</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Other sections and content */}
      </main>
    </div>
  );
};

export default Homepage;