import React, { useState } from 'react';
import './Newsletter.css'; // Import the CSS file

const Newsletter = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name && email) {
        console.log('Subscribed:', { name, email });
        setIsSubscribed(true);
        setMessage('');
        setName('');
        setEmail('');
      } else {
        setMessage('Please enter both name and email.');
      }
    };
  
    return (
      <div className="newsletter-background"> {/* Gradient background container */}
        <div className="newsletter-container glow-effect">
          {!isSubscribed ? (
            <>
              <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
              <p className="newsletter-description">
                Stay ahead with the latest financial news and expert insights delivered to your inbox.
              </p>
              <form onSubmit={handleSubmit} className="newsletter-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="newsletter-input"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="newsletter-input"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="newsletter-button">
                  <span>Subscribe</span>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
              {message && <p className="newsletter-message">{message}</p>}
            </>
          ) : (
            <div className="thank-you-message">
              <h2>Thank You for Subscribing!</h2>
              <p>Welcome to our community. You're now part of an exclusive group that receives:</p>
              <ul>
                <li>Breaking financial news</li>
                <li>Expert market analysis</li>
                <li>Exclusive investment tips</li>
                <li>Special offers and events</li>
              </ul>
              <p>Check your inbox soon for a welcome email and your first newsletter!</p>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Newsletter;
