import React from 'react';

function Contact() {
  return (
    <div style={{ padding: '60px', textAlign: 'center', backgroundColor: '#ffeffe', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '36px', color: '#333' }}>Contact Us</h1>
      <p style={{ fontSize: '18px', color: '#555', maxWidth: '800px', margin: '20px auto' }}>
        We would love to hear from you! Whether you have questions about our platform, suggestions for improvement, or partnership opportunities, feel free to get in touch.
      </p>

      <h3 style={{ fontSize: '24px', color: '#333' }}>Email</h3>
      <p style={{ fontSize: '18px', color: '#555' }}>support@finnews.com</p>

      <h3 style={{ fontSize: '24px', color: '#333' }}>Phone</h3>
      <p style={{ fontSize: '18px', color: '#555' }}>+91 123 456 7890</p>

      <h3 style={{ fontSize: '24px', color: '#333' }}>Address</h3>
      <p style={{ fontSize: '18px', color: '#555' }}>
        456 Finance Road,<br />
        Bandra Kurla Complex,<br />
        Mumbai, Maharashtra 400051<br />
        India
      </p>
    </div>
  );
}

export default Contact;
