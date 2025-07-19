import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Newsletter.css';

const Newsletter = () => {
  const [billingType, setBillingType] = useState('monthly');

  const monthlyPrices = {
    basic: 5,
    pro: 15,
    premium: 30,
  };

  const annualPrices = {
    basic: monthlyPrices.basic * 12,
    pro: monthlyPrices.pro * 12,
    premium: monthlyPrices.premium * 12,
  };

  const handleBillingToggle = (type) => {
    console.log(`Billing type changed to: ${type}`);
    setBillingType(type);
  };

  const getPrices = () => {
    return billingType === 'monthly' ? monthlyPrices : annualPrices;
  };

  const prices = getPrices();
  console.log('Current prices:', prices);

  const adjustedPriceForBasic = (plan) => {
    if (plan === "basic" && billingType === "monthly") {
      return prices.basic * 2;
    }
    return prices[plan];
  };

  return (
    <div className="pricing-background">
      <div>
        <div className="toggle-billing">
          <button 
            className={`billing-btn ${billingType === 'monthly' ? 'active' : ''}`} 
            onClick={() => handleBillingToggle('monthly')}
          >
            Billed Monthly
          </button>
          <button 
            className={`billing-btn ${billingType === 'annually' ? 'active' : ''}`} 
            onClick={() => handleBillingToggle('annually')}
          >
            Billed Annually
          </button>
        </div>

        <div className="plans">
          {/* Basic Plan */}
          <div className="plan">
            <h3>Basic</h3>
            <h1>
              ${adjustedPriceForBasic('basic')} {billingType === 'annually' && <span>-15% OFF</span>}
            </h1>
            <p>per user/{billingType}</p>
            <p>For Casual Readers</p>
            <ul>
  <li><span className="tick">✓</span> Access to Free Articles</li>
  <li><span className="tick">✓</span> Daily Newsletter</li>
  <li><span className="cross">✗</span> Offline Reading</li>
  <li><span className="cross">✗</span> Ad-Free Experience</li>
  <li><span className="cross">✗</span> Access to Archives</li>
  <li><span className="cross">✗</span> Exclusive Content</li>
</ul>

            <Link 
              to="/subscribe" 
              state={{ plan: "Basic", price: adjustedPriceForBasic('basic'), billingType: billingType }}
            >
              <button className="get-started-btn">Get Started</button>
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="plan">
            <h3>Pro</h3>
            <h1>
              ${prices.pro} {billingType === 'annually' && <span>-15% OFF</span>}
            </h1>
            <p>per user/{billingType}</p>
            <p>For Regular Readers</p>
            <ul>
  <li><span className="tick">✓ </span> Access to All Articles</li>
  <li><span className="tick">✓</span> Daily Newsletter</li>
  <li><span className="tick">✓</span> Offline Reading</li>
  <li><span className="tick">✓</span> Ad-Free Experience</li>
  <li><span className="cross">✗</span>Access to Archives</li>
  <li><span className="cross">✗</span> Exclusive Content</li>
</ul>

            <Link 
              to="/subscribe" 
              state={{ plan: "Pro", price: prices.pro, billingType: billingType }}
            >
              <button className="get-started-btn">Get Started</button>
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="plan">
            <h3>Premium</h3>
            <h1>
              ${prices.premium} {billingType === 'annually' && <span>-15% OFF</span>}
            </h1>
            <p>per user/{billingType}</p>
            <p>For Avid Readers</p>
            <ul>
  <li><span className="tick">✓</span> Access to All Articles</li>
  <li><span className="tick">✓</span> Daily Newsletter</li>
  <li><span className="tick">✓</span> Offline Reading</li>
  <li><span className="tick">✓</span> Ad-Free Experience</li>
  <li><span className="tick">✓</span> Access to Archives</li>
  <li><span className="tick">✓</span> Exclusive Content</li>
</ul>

            <Link 
              to="/subscribe" 
              state={{ plan: "Premium", price: prices.premium, billingType: billingType }}
            >
              <button className="get-started-btn">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
