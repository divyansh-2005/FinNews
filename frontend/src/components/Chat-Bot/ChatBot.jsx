import React, { memo } from 'react';
import ChatBot from 'react-simple-chatbot'; // Import ChatBot
import { FiMessageCircle } from 'react-icons/fi';

const steps = [
  {
    id: '1',
    message: 'Hi! How can I help you today?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 'blog', label: 'Read a blog', trigger: '3' },
      { value: 'signup', label: 'Sign up', trigger: '4' },
    ],
  },
  {
    id: '3',
    message: 'You can explore our blogs by visiting the Blogs section!',
    end: true,
  },
  {
    id: '4',
    message: 'Feel free to sign up using our sign-up form!',
    end: true,
  },
];

function ChatbotFeature() {
  const [showChat, setShowChat] = React.useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div>
      {/* Floating Chatbot Icon */}
      <div 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          backgroundColor: '#007bff',
          color: 'white',
          padding: '15px',
          borderRadius: '50%',
          cursor: 'pointer',
        }}
        onClick={toggleChat}
      >
        <FiMessageCircle size={24} />
      </div>

      {/* Chatbot Window */}
      {showChat && (
        <div
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            zIndex: 1000,
            width: '300px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <ChatBot steps={steps} />
          <button 
            style={{ 
              position: 'absolute', 
              top: '5px', 
              right: '5px', 
              background: 'transparent', 
              border: 'none', 
              cursor: 'pointer',
              fontSize: '18px'
            }} 
            onClick={toggleChat}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

export default memo(ChatbotFeature);
