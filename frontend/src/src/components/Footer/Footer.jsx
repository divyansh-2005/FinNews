import React from 'react';
import { FaRss, FaRedditAlien, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from './Footer.module.css'; // Import as module

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* First Section: Website Description */}
      <div className={styles.footerSection}>
        <h4>FinNews</h4>
        <p>Your trusted companion for financial guidance and investment strategies.</p>
      </div>

      {/* Second Section: About and Other Pages */}
      <div className={styles.footerSection}>
        <h4>Explore</h4>
        <div className={styles.footerLinks}>
          <div>About</div>
          <div>Fin-Buddy</div>
          <div>Investments</div>
          <div>Blog</div>
        </div>
      </div>

      {/* Third Section: Helpdesk and Contact */}
      <div className={styles.footerSection}>
        <h4>Help & Support</h4>
        <div className={styles.footerLinks}>
          <div>Helpdesk</div>
          <div>FAQs</div>
          <div>Contact Us</div>
        </div>
      </div>

      {/* Fourth Section: Social Icons */}
      <div className={styles.footerSection}>
        <h4>Follow Us</h4>
        <div className={styles.footerIcons}>
          <FaRss size="28px" color='#fff' />
          <FaXTwitter size="28px" color='#fff' />
          <FaRedditAlien size="28px" color='#fff' />
          <FaFacebook size="28px" color='#fff' />
        </div>
      </div>

      {/* Copyright Statement */}
      <div className={styles.footerCopyright}>
        &copy; 2024 | FinNews. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
