import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



function Blog() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost = await getPost(id);
      setPost(fetchedPost);
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
         <h1 className="blog-heading">{post.title}</h1>
      <p className="blog-content">{post.content}</p>
    </div>
  );
}

export default Blog;