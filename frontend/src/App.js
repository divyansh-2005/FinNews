import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyFeed from './components/MyFeedSecion/MyFeed';
import Header from './components/Header/Header';
import Signup from './components/SignUp/Signup';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import BlogSection from './components/Blogs/BlogSection';
import BlogPageTemplate from "./components/Blogs/BlogPageTemplate";
import Newsletter from './components/Newsletter/Newsletter';

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
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
          </Router>
        </HelmetProvider>  // Closing tag for HelmetProvider
      );
    }
    
 
export default App;
