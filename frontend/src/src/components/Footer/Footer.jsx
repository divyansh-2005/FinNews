import React from 'react';
import { FaRss, FaRedditAlien, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <h4>FinNews</h4>
        <p>Your trusted companion for financial guidance and investment strategies.</p>
      </div>

      <div className={styles.footerSection}>
        <h4>Explore</h4>
        <div className={styles.footerLinks}>
          <a href="/about">About</a>
          <a href="/fin-buddy">Fin-Buddy</a>
          <a href="/investments">Investments</a>
          <a href="/blog">Blog</a>
        </div>
      </div>

      <div className={styles.footerSection}>
        <h4>Help & Support</h4>
        <div className={styles.footerLinks}>
          <a href="/helpdesk">Helpdesk</a>
          <a href="/faqs">FAQs</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>

      <div className={styles.footerSection}>
        <h4>Follow Us</h4>
        <div className={styles.footerIcons}>
          <a href="#" aria-label="RSS Feed" target="_blank" rel="noopener noreferrer">
            <FaRss size="28px" color='#fff' />
          </a>
          <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size="28px" color='#fff' />
          </a>
          <a href="#" aria-label="Reddit" target="_blank" rel="noopener noreferrer">
            <FaRedditAlien size="28px" color='#fff' />
          </a>
          <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook size="28px" color='#fff' />
          </a>
        </div>
      </div>

      <div className={styles.footerCopyright}>
        &copy; 2024 | FinNews. All Rights Reserved. 
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a> | 
        <a href="/terms-of-service" target="_blank" rel="noopener noreferrer"> Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;
