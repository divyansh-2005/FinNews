import React, { useState } from 'react';
import './Newsletter.css'; // Import the CSS file

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (email) {
        console.log('Subscribed with email:', email);
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setMessage('Please enter a valid email.');
      }
    };
  
    return (
      <div className="newsletter-background"> {/* Gradient background container */}
        <div className="newsletter-container">
          <h2 className="newsletter-title">Subscribe to our Newsletter</h2>
          <p className="newsletter-description">
            Stay updated with the latest news and updates directly in your inbox.
          </p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
          {message && <p className="newsletter-message">{message}</p>}
        </div>
      </div>
    );
  };
  
  export default Newsletter;
  