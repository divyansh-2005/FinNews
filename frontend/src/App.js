import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyFeed from "./components/MyFeedSecion/MyFeed";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BlogSection from "./components/Blogs/BlogSection";
import BlogPageTemplate from "./components/Blogs/BlogPageTemplate";
import News from "./components/News/News"; // Ensure this path is correct

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myfeed" element={<MyFeed />} />
          <Route path="/blog/:key" element={<BlogPageTemplate />} />
          <Route path="/blogs" element={<BlogSection />} />
          <Route path="/news" element={<News />} /> {/* Link to News Section */}
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
