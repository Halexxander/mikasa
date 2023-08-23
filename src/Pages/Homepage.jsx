// Homepage.js
import React from "react";
import BlogPost from "../components/Blogpost"; // Import the BlogPost component
import "./Homepage.css"
const Homepage = () => {
  const blogPosts = [
    {
      title: "Title of Blog Post 1",
      author: "Author 1",
      date: "August 1, 2023",
      content: "Content of Blog Post 1...",
    },
    {
      title: "Title of Blog Post 2",
      author: "Author 2",
      date: "August 2, 2023",
      content: "Content of Blog Post 2...",
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="homepage">
      <h1>NetQuiver Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            author={post.author}
            date={post.date}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
