import React from 'react';

function About() {
  return (
    <div style={{ padding: '60px', textAlign: 'center', backgroundColor: '#ffeffe', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '36px', color: '#333' }}>About Us</h1>
      <p style={{ fontSize: '18px', color: '#555', maxWidth: '800px', margin: '20px auto' }}>
        Welcome to <strong>FinNews</strong>! At FinNews, we strive to bring you the latest financial insights and news, all in one place. 
        Our mission is to keep users informed and up-to-date with relevant financial information from across the globe. Whether you're a seasoned investor, a startup enthusiast, 
        or someone looking to stay updated with government schemes, FinNews has got you covered.
      </p>

      <p style={{ fontSize: '18px', color: '#555', maxWidth: '800px', margin: '20px auto' }}>
        We cover a wide range of financial categories, including:
      </p>

      <ul style={{ fontSize: '18px', color: '#555', textAlign: 'left', maxWidth: '800px', margin: '0 auto 20px' }}>
        <li><strong>Finance News</strong>: Stay informed with the most recent and impactful news in the financial sector. From stock market movements to global economic trends, we keep you updated.</li>
        <li><strong>Government Schemes</strong>: Our platform provides detailed insights into the latest government policies and initiatives that impact various sectors of the economy. Whether you're a business owner or an individual looking for opportunities, we help you navigate the maze of government schemes.</li>
        <li><strong>Startup Insights</strong>: For entrepreneurs and startup enthusiasts, we offer exclusive insights into the startup ecosystem. Learn about emerging trends, funding opportunities, and successful startup stories to fuel your own journey.</li>
        <li><strong>Daily News</strong>: Get a quick and concise summary of the day’s top stories. We know you're busy, so we deliver bite-sized news that keeps you informed without overwhelming you.</li>
      </ul>

      <p style={{ fontSize: '18px', color: '#555', maxWidth: '800px', margin: '20px auto' }}>
        At <strong>FinNews</strong>, we believe that staying informed is key to making smarter financial decisions. Our goal is to provide timely and accurate information in a way that is accessible to everyone, 
        from individual investors to large enterprises. We are dedicated to making financial literacy more attainable and equipping our users with the tools they need to thrive in an ever-changing world.
      </p>
    </div>
  );
}

export default About;
