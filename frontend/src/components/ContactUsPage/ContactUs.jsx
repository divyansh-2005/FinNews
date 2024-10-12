import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-us">
      <h2 className="contact-heading"> Get in Touch with Us </h2>
      <form className="contact-form">
        <label htmlFor="name" className="contact-label">Name</label>
        <input type="text" id="name" className="contact-input" placeholder="Enter your name" />

        <label htmlFor="email" className="contact-label">Email</label>
        <input type="email" id="email" className="contact-input" placeholder="Enter your email" />

        <label htmlFor="message" className="contact-label">Message</label>
        <textarea id="message" className="contact-textarea" placeholder="Enter your message"></textarea>

        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
