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
import styled from "styled-components";

// Styled-components for the chatbot button and container
// Styled-components for the chatbot button and container
const ChatbotButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px; /* Changed from 'right' to 'left' */
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
  bottom: 80px; /* Adjust based on button size */
  left: 20px; /* Changed from 'right' to 'left' */
  z-index: 1000;
`;


// Chatbot steps
// Chatbot steps
const steps = [
  {
    id: "1",
    message: "Hi! How can I assist you today?",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    // Function to evaluate the user's input and determine the next step
    message: ({ previousValue }) => {
      const input = previousValue.toLowerCase();
      if (input.includes("help")) {
        return "I'm here to help! What specific help do you need?";
      } else if (input.includes("hello") || input.includes("hii") || input.includes("hey")) {
        return "Hello! How can I help you?";
      } else if (input.includes("features")) {
        return "Our platform has various features like Blogs, Schemes, and latest updates. You can explore our website";
      } else if (input.includes("what is finnews")) {
        return "FinNews is a platform that provides the latest financial news, insights, and updates on the market. Would you like to explore our news section?";
      } else {
        return "Thanks for your input! Is there anything else you'd like to ask?";
      }
    },
    trigger: "repeat",
  },
  {
    id: "repeat",
    message: "Feel free to ask anything else!",
    trigger: "4",
  },
  {
    id: "4",
    user: true,
    trigger: "3", // Loop back to step 3 to keep evaluating the input
  },
  {
    id: "5",
    message: ({ previousValue }) => {
      const input = previousValue.toLowerCase();
      if (input.includes("yes")) {
        return "Great! What else can I assist you with?";
      } else {
        return "No problem! Let me know if you have any other questions.";
      }
    },
    trigger: "6",
  },
  {
    id: "6",
    user: true,
    trigger: "7",
  },
  {
    id: "7",
    message: "Let us know if there's more you need!",
    trigger: "8",
  },
  {
    id: "8",
    user: true,
    trigger: "9",
  },
  {
    id: "9",
    message: "Thanks for staying with us! Any further questions?",
    trigger: "10",
  },
  {
    id: "10",
    user: true,
    trigger: "11",
  },
  {
    id: "11",
    message: "Feel free to ask anything else!",
    trigger: "12",
  },
  {
    id: "12",
    user: true,
    trigger: "13",
  },
  {
    id: "13",
    message: "We are happy to assist you. Do you have more questions?",
    trigger: "14",
  },
  {
    id: "14",
    user: true,
    trigger: "15",
  },
  {
    id: "15",
    message: "Thanks! We are always here to help. Anything else?",
    trigger: "16",
  },
  {
    id: "16",
    user: true,
    trigger: "17",
  },
  {
    id: "17",
    message: "Great! Let us know if you need more assistance.",
    end: true,
  },
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

// App Component
function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const memoizedSteps = useMemo(() => steps, []);

  const toggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev);
  };

import useOnline from './components/Offline/useOnline';
import Offline from './components/Offline/Offline';
function App() {
  const isOnline = useOnline();
  return (


  return (
    <HelmetProvider>
      <Router>
            {
              isOnline?(
                <>
            <Header />
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

        {/* Chatbot button */}
        <ChatbotButton onClick={toggleChatbot}>
          {isChatbotOpen ? "×" : "🎧"}
        </ChatbotButton>

        {/* Conditionally render ChatBot component */}
        {isChatbotOpen && (
          <ChatbotContainer>
            <ThemeProvider theme={theme}>
            <ChatBot
              steps={steps}
              floating={false}
              headerTitle="Get help"
              style={{
                width: "300px",  // Adjusted width
                height: "400px", // Adjusted height
                overflowY: "auto", // Allow scrolling for overflow content
              }}
              inputStyle={{
                padding: "5px 10px 0px 10px", // Decrease padding for smaller input
                height: "50px", // Decrease input height
              }}
              contentStyle={{
                height: "calc(100% - 60px)", // Adjust content height to fit header and input
                overflowY: "auto",
              }}
            />
            </ThemeProvider>
          </ChatbotContainer>
        )}

        <Footer />
            </>
          ) : (<Offline />)
        }
        <BackToTop />
      </Router>
    </HelmetProvider>
  );
}

export default App;
