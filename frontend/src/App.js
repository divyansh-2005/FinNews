// App.js
import React, { useState, useMemo } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyFeed from './components/MyFeedSecion/MyFeed';
import Header from './components/Header/Header';
import Signup from './components/SignUp/Signup';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import About from './components/Footer/About'; // Import the About component
import Contact from './components/Footer/Contact'; // Import the Contact component
import BlogSection from './components/Blogs/BlogSection';
import BlogPageTemplate from "./components/Blogs/BlogPageTemplate";
import Newsletter from './components/Newsletter/Newsletter';
import BackToTop from './components/Back-to-top/BackToTop';

import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import ScrollProgressBar from './components/Scroll-progress/ScrollProgress'; // Import the ScrollProgressBar

import styled from "styled-components";

// Styled-components for the chatbot button and container
const ChatbotButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: purple;
  color: white;
  border: none;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  font-size: 30px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  &:hover {
    background-color: #5f0770;
  }
`;

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 80px;
  left: 20px;
  z-index: 1000;
`;

// Chatbot steps
const steps = [
  {
    id: "1",
    message: "Hi! How can I assist you today?",
    trigger: "2",
  },
  // ... (rest of your steps)
];

// Chatbot theme
const theme = {
  background: "#f5f8fb",
  headerBgColor: "purple",
  headerFontColor: "#fff",
  botBubbleColor: "purple",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

// Other imports and styled components...

function App() {

  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const memoizedSteps = useMemo(() => steps, []);

  const toggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev);
  };

  // ... existing code

  return (
    <HelmetProvider>
      <Router>

        <Header />
        <ScrollProgressBar /> {/* Add the ScrollProgressBar here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myfeed" element={<MyFeed />} />
          <Route path="/blog/:key" element={<BlogPageTemplate />} />
          <Route path="/blogs" element={<BlogSection />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Chatbot button and other components... */}

        {/* Chatbot button */}
        <ChatbotButton onClick={toggleChatbot}>
          {isChatbotOpen ? "×" : "🎧"}
        </ChatbotButton>

        {/* Conditionally render ChatBot component */}
        {isChatbotOpen && (
          <ChatbotContainer>
            <ThemeProvider theme={theme}>
              <ChatBot
                steps={memoizedSteps}
                floating={false}
                headerTitle="Get help"
                style={{
                  width: "300px",
                  height: "400px",
                  overflowY: "auto",
                }}
                inputStyle={{
                  padding: "5px 10px 0px 10px",
                  height: "50px",
                }}
                contentStyle={{
                  height: "calc(100% - 60px)",
                  overflowY: "auto",
                }}
              />
            </ThemeProvider>
          </ChatbotContainer>
        )}

        <Footer />
            </>
              ):(<Offline/>)
            }
        <BackToTop />
      </Router>
    </HelmetProvider>
  );
}

export default App;
