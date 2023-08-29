import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const blogDoc = doc(db, "blogs", id);
      const blogSnapshot = await getDoc(blogDoc);
      if (blogSnapshot.exists()) {
        setBlog(blogSnapshot.data());
      } else {
        console.log("Blog not found.");
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.author}</p>
      <p>{blog.date}</p>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetailPage;