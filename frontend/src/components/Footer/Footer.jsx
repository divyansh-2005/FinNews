import React from 'react';
import { FaRss, FaRedditAlien, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import styles from './Footer.module.css'; // Import as module

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Left Section: Logo, Description, and Copyright */}
      <div className={styles.footerLeft}>
        <div className={styles.footerLogo}></div>
        <div className={styles.footerDescription}>
          FinNews is your one-stop source for all things finance. Stay updated with the latest financial news, trends, and government schemes.
        </div>
        <div className={styles.footerCopyright}>
          &copy; 2024 | Prolega
        </div>
      </div>

      {/* Center Section: Policy Links */}
      <div className={styles.footerPolicy}>
        <h4>Policies</h4>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/do-not-sell">Do Not Sell My Personal Info</a>
        <a href="/terms-of-service">Terms of Service</a>
      </div>

      {/* Right Section: Links and Icons */}
      <div className={styles.footerRight}>
        <div className={styles.footerLinks}>
          <h4>Quick Links</h4>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/fin-buddy">Fin-Buddy</a>
          <a href="/investments">Investments</a>
        </div>
        <div className={styles.footerIcons}>
          <a href="https://rss.com" target="_blank" rel="noopener noreferrer">
            <FaRss size="28px" color="#fff" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size="28px" color="#fff" />
          </a>
          <a href="https://reddit.com" target="_blank" rel="noopener noreferrer">
            <FaRedditAlien size="28px" color="#fff" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size="28px" color="#fff" />
          </a>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className={styles.footerNewsletter}>
        <h4>Subscribe to Our Newsletter</h4>
        <p>Get the latest updates on financial news directly to your inbox.</p>
        <form>
          <input
            className={styles.newsletterInput}
            type="email"
            placeholder="Enter your email"
          />
          <button className={styles.newsletterButton} type="submit">
            Subscribe
          </button>
        </form>
      </div>

      {/* Bottom Section */}
      <div className={styles.footerBottom}>
        <p>Follow us on social media or subscribe to stay informed.</p>
      </div>
    </footer>
  );
}

export default Footer;
 