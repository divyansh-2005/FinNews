import React from 'react';
import icon1 from '../../assets/icon-1.png';
import icon2 from '../../assets/icon-2.png';
import icon3 from '../../assets/icon-3.png';
import icon4 from '../../assets/icon-4.png';
import styles from './Footer.module.css'; // Import as module

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Left Section: Logo and Copyright */}
      <section className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <div className={styles.footerLogo}></div>
          <div className={styles.footerCopyright}>
            &copy; 2024 | Prolega
          </div>
        </div>

        {/* Center Section: Policy Links */}
        <div className={styles.footerPolicy}>
          <p>Privacy Policy</p>
          <p>Do not sell my personal info</p>
          <p>Terms of Service</p>
        </div>

        {/* Right Section: Links and Icons */}
        <div className={styles.footerRight}>
          <div className={styles.footerLinks}>
            <p>About</p>
            <p>Contact</p>
            <p>Fin-Buddy</p>
            <p>Investments</p>
          </div>
          <div className={styles.footerIcons}>
            <img src={icon1} alt="RSS" />
            <img src={icon2} alt="Twitter" />
            <img src={icon3} alt="Reddit" />
            <img src={icon4} alt="Facebook" />
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
