

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Subscribe.css';

const Subscribe = () => {
  const location = useLocation();
  const { plan, price, billingType } = location.state || {
    plan: "N/A",
    price: 0,
    billingType: "N/A"
  };

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Define features for each plan type
  const features = {
    Basic: [
      { text: "Access to Free Articles", available: true },
      { text: "Daily Newsletter", available: true },
      { text: "Offline Reading", available: false },
      { text: "Ad-Free Experience", available: false },
      { text: "Access to Archives", available: false },
      { text: "Exclusive Content", available: false },
    ],
    Pro: [
      { text: "Access to All Articles", available: true },
      { text: "Daily Newsletter", available: true },
      { text: "Offline Reading", available: true },
      { text: "Ad-Free Experience", available: true },
      { text: "Access to Archives", available: false },
      { text: "Exclusive Content", available: false },
    ],
    Premium: [
      { text: "Access to All Articles", available: true },
      { text: "Daily Newsletter", available: true },
      { text: "Offline Reading", available: true },
      { text: "Ad-Free Experience", available: true },
      { text: "Access to Archives", available: true },
      { text: "Exclusive Content", available: true },
    ],
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(false);

    if (validateEmail(email)) {
      setError("");
      setSubmitted(true);
      alert("Payment Link Sent Successfully!");
      console.log("Subscription successful for email:", email);
      console.log(location); // Log location on submit to check state

      setEmail("");
    } else {
      setError("Please enter a valid email address.");
      alert("Please enter a valid email address."); // Alert when the email ID is invalid
    }
  };

  // Get the features based on the plan type
  const currentFeatures = features[plan] || [];

  return (
    <div style={{
        margin: 0,
        height: '100vh',
        background: 'linear-gradient(90deg, #2c0727 0%, #110823 100%)',
        padding: '50px 0 0 0', // Adds padding above
      }}>
    <div className="bodysub">
    <div className="subscribe-container">
      {plan !== "N/A" && ( 
        <div className="plan-details">
          <h4 className="plan-name">{plan} Plan</h4>
          <p className="plan-price">
            Price: <span className="price-value">${price}</span>
            {billingType === 'annually' && <span className="discount"> -15% OFF</span>}
          </p>
          <p className="billing-type">Billed: {billingType}</p>
          <h5 className="features-title">Available Features:</h5>
          <ul className="features-list">
            {currentFeatures.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className={feature.available ? "tick" : "cross"}>
                  {feature.available ? '✓' : '✗'}
                </span>
                <span className="feature-text">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit} className="subscribe-form">
        <input
          type="email"
          placeholder="Enter your mail ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="subscribe-input"
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="subscribe-button">
          Subscribe
        </button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Subscribe;