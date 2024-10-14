import React, { useState } from "react";
import img from "./Images/landingpgimg.png";
import "./BlogSection.css";
import data from "./BlogsData.json";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const allBlog = (filteredBlogs) => {
  const data = filteredBlogs;
  return data.map((blog, index) => (
    <div className="oneblog">
      <img src={blog.thumbnailimg} alt="" />
      <h2>{blog.title}</h2>
      <p>{blog.shortsummary}</p>
      <div>
        <p>{blog.date}</p>
        <Link to={`/blog/${blog.searchkey}`}>Read More</Link>
      </div>
    </div>
  ));
};

function BlogSection() {
  const [filteredBlogs, setFilteredBlogs] = useState(data.data);
  const [query, setQuery] = useState("");
  // window.scrollTo({
  //   top: 0,
  //   behavior: "smooth",
  // });

  function handleSearch(e) {
    const value = e.target.value;
    setQuery(value);

    if (value.length === 0) {
      setFilteredBlogs(data.data);
    } else {
      const filteredData = data.data.filter((blog) =>
        `${blog.title} ${blog.shortsummary}`
          .toLowerCase()
          .includes(value.toLowerCase())
      );
      setFilteredBlogs(filteredData);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
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
          <i class="fa-solid fa-angles-down"></i>
        </div>
        <h1 className="our-home-heading">OUR RECENTS BLOGS</h1>
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search conatainer">
            <input
              type="text"
              placeholder="Search..."
              className="searchInput"
              value={query}
              onChange={handleSearch}
            />
            {/* <img src={"/search.png"} alt="Search Icon" className="searchIcon" /> */}

            <img src={"/search.png"} alt="Search Icon" className="searchIcon" />
          </div>
        </form>

        <div id="blog-allblogs">{allBlog(filteredBlogs)}</div>
      </div>
    </>
  );
}

export default BlogSection;
