import React from 'react';

import styles from "./FAQModal.module.css";

function Contact({onClose}) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e)=>e.stopPropagation()}>
        <h2>Contact Us</h2>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <p>
          We would love to hear from you! Whether you have questions about our platform, suggestions for improvement, or partnership opportunities, feel free to get in touch.
        </p>
        <h3>Email</h3>
        <p>support@finnews.com</p>

        <h3>Phone</h3>
        <p>+91 123 456 7890</p>

        <h3>Address</h3>
        <p>
          456 Finance Road,<br />
          Bandra Kurla Complex,<br />
          Mumbai, Maharashtra 400051<br />
          India
        </p>
      </div>
    </div>
  );
}

export default Contact;
