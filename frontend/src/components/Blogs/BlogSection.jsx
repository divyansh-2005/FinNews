import React, { useState, useEffect } from "react";
import img from "./Images/landingpgimg.png";
import "./BlogSection.css";
// import data from "./BlogsData.json";
// import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


// const allBlog = () => {
//   return data.data.map((blog, index) => (
//     <div className="oneblog">
//       <img src={blog.thumbnailimg} alt="" />
//       <h2>{blog.title}</h2>
//       <p>{blog.shortsummary}</p>
//       <div>
//         <p>{blog.date}</p>
//         <Link to={`/blog/${blog.searchkey}`}>Read More</Link>
//       </div>
//     </div>
//   ));
// };


function BlogSection() {
  // const [filteredBlogs, setFilteredBlogs] = useState(data.data);
  // const [query, setQuery] = useState("");
  // // window.scrollTo({
  // //   top: 0,
  // //   behavior: "smooth",
  // // });

  // function handleSearch(e) {
  //   const value = e.target.value;
  //   setQuery(value);

  //   if (value.length === 0) {
  //     setFilteredBlogs(data.data);
  //   } else {
  //     const filteredData = data.data.filter((blog) =>
  //       `${blog.title} ${blog.shortsummary}`
  //         .toLowerCase()
  //         .includes(value.toLowerCase())
  //     );
  //     setFilteredBlogs(filteredData);
  //   }
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  // }

  // Blog fetching logic (from BlogPageCard)
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch('http://localhost:5000/api/get-blog');
        let data = await response.json();
        setBlogs(data.blogs || []);
      } catch (error) {
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Helper to format date as dd-mm-yyyy
  function formatDate(dateString) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "";
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  return (
    <>
      <Helmet>
        <title>BLOGS | FINNEWS TEAM</title>
        <meta
          name="description"
          content="Visit the official website of Blockchain RCOEM Chapter (BRC), your gateway to decentralized development and blockchain programming at RCOEM"
        />
        <meta property="og:title" content="BLOG | BLOCKCHAIN RCOEM CHAPTER" />
        <meta property="og:site_name" content="BLOCKCHAIN RCOEM CHAPTER" />
        <meta
          property="og:description"
          content="Visit the official website of Blockchain RCOEM Chapter (BRC), your gateway to decentralized development and blockchain programming at RCOEM"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://blockchainrcoemchapter.co.in/blogs"
        />
        <link
          rel="cononical"
          href="https://blockchainrcoemchapter.co.in/blogs"
        />
      </Helmet>
      <div id="BlogSection">
        <div id="blog-landingpage">
          <h2>Simplify, Explore, and Connect with FIN NEWS Blog Wisdom</h2>
          <img src={img} alt="" />
          <i className="fa-solid fa-angles-down"></i>
        </div>
        <div className="blog-allblogs">
          {loading ? (
            <p>Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <p>No blog to show...</p>
          ) : (
            // Group blogs into rows of 3
            Array.from({ length: Math.ceil(blogs.length / 3) }, (_, rowIdx) => (
              <div key={rowIdx} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                {blogs.slice(rowIdx * 3, rowIdx * 3 + 3).map((blog) => (
                  <div className="oneblog" key={blog._id}>
                    <img src={blog.thumbnailimg || img} alt={blog.title} />
                    <h2>{blog.title}</h2>
                    <p>{wrapWords(blog.shortsummary || blog.content, 34)}</p>
                    <div>
                      <p>{formatDate(blog.date)}</p>
                      <a href={`/blog/${blog._id}`}>Read More</a>
                    </div>
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

// Helper to wrap content to a certain number of words
function wrapWords(text, wordLimit) {
  if (!text) return '';
  const words = text.split(/\s+/);
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
}

export default BlogSection;
