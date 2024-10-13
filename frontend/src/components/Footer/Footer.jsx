import React from 'react';
import { FaRss, FaRedditAlien, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import styles from './Footer.module.css'; // Import as module

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Left Section: Logo and Copyright */}
      <div className={styles.footerLeft}>
        <div className={styles.footerLogo}></div>
        <div className={styles.footerCopyright}>
          &copy; 2024 | Prolega
        </div>
      </div>
      
      {/* Center Section: Policy Links */}
      <div className={styles.footerPolicy}>
        <div>Privacy Policy</div>
        <div>Do not sell my personal info</div>
        <div>Terms of Service</div>
      </div>
      
      {/* Right Section: Links and Icons */}
      <div className={styles.footerRight}>
        <div className={styles.footerLinks}>
          <Link to="/about">About</Link> 
          <Link to="/contact">Contact</Link>
          <div>Fin-Buddy</div>
          <div>Investments</div>
        </div>
        <div className={styles.footerIcons}>
          <FaRss size="28px" color='#fff' />
          <FaXTwitter size="28px" color='#fff' />
          <FaRedditAlien size="28px" color='#fff' />
          <FaFacebook size="28px" color='#fff' />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
