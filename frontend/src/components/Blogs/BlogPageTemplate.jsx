
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BlogPageTemplate.css";

function BlogPageTemplate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);
    setError(null);
    fetch(`http://localhost:5000/api/get-blog/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Blog not found");
        return res.json();
      })
      .then((data) => {
        setBlog(data.blog);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!blog) return <div>No blog found.</div>;

  return (
    <div id="BlogTemplate">
      <h1>{blog.title}</h1>
      <div id="blog-introduction">
        <span>
          <p>-{blog.author}</p>
          <p>{`Published on ${new Date(blog.date).toLocaleDateString()}`}</p>
        </span>
      </div>
      <div className="blog-content">
        <p>{blog.content}</p>
      </div>
      <button
        className="btn d-inline-block"
        onClick={() => navigate(-1)}
        style={{
          backgroundColor: "#a759bb",
          color: "black",
          borderRadius: "8px",
          fontFamily: '"Readex Pro", sans-serif',
          fontWeight: "bold",
          width: "200px",
          marginTop: "20px",
          padding: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default BlogPageTemplate;
