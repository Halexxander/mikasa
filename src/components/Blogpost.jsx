// BlogPost.js
import React from "react";

const BlogPost = ({ title, author, date, content }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>By {author} on {date}</p>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;
