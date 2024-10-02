import React from "react";
import jsondata from "./BlogsData.json";
import { useParams } from "react-router-dom";
import bg from "./Images/brc-bordered-logo.png";
import "./BlogPageTemplate.css";
import { Helmet } from "react-helmet-async";

function BlogPageTemplate() {
  const { key } = useParams();
  const filteredData = jsondata.data.find((item) => item.searchkey === key);

  if (!filteredData) {
    return "NO BLOG FOUND";
  }
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
      <Helmet>
        <title>{filteredData.title}</title>
        <meta name="description" content={filteredData.shortsummary} />
        <meta property="og:title" content={filteredData.title} />
        <meta property="og:site_name" content={filteredData.title} />
        <meta property="og:description" content={filteredData.shortsummary} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://blockchainrcoemchapter.co.in/blog/${filteredData.searchkey}`}
        />
        <link
          rel="cononical"
          href={`https://blockchainrcoemchapter.co.in/blog/${filteredData.searchkey}`}
        />
      </Helmet>
      <div id="BlogTemplate">
        <h1>{filteredData.title}</h1>
        <div id="blog-introduction">
          <img src={bg} alt="" />
          <span>
            <p>-Finnews Team</p>
            <p>{`Published on ${filteredData.date} · ${filteredData.readtime} read`}</p>
          </span>
        </div>
        {filteredData.material.map((item, index) => {
          if (item.tag === "img") {
            return <img key={index} src={item.src} alt="" />;
          } else if (item.tag === "h2") {
            return <h2 key={index}>{item.content}</h2>;
          } else if (item.tag === "p") {
            return <p key={index}>{item.content}</p>;
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
}

export default BlogPageTemplate;
