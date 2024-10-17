import React, { useState } from "react";
import styles from "./Help.module.css";
import FAQModal from "../Footer/FAQModal";

export default function Help() {
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const toggleFAQ = () => setIsFAQOpen(!isFAQOpen);

  return (
    <div
      style={{
        padding: "60px",
        textAlign: "center",
        backgroundColor: "#ffeffe",
        minHeight: "100vh",
      }}
    >
      <section>
        <h1 style={{ fontSize: "36px", color: "#333" }}>Help Centre</h1>
        <p
          style={{
            fontSize: "18px",
            color: "#555",
            maxWidth: "800px",
            margin: "20px auto",
          }}
        >
          We are here to help you whenever you run into a problem
        </p>
      </section>

      {/* Form section for detailed message */}

      <section className={styles.helpForm}>
        <h3 style={{ fontSize: "24px", color: "#333" }}>Ask our Experts</h3>
        <input className={styles.helpInput} placeholder="Name" />
        <input
          className={styles.helpInput}
          type="email"
          name="useremail"
          id="useremail"
          placeholder="Email"
        />
        <textarea
          className={styles.helpTextarea}
          name="message"
          id="message"
          placeholder="Message"
        ></textarea>
        <input className={styles.helpSubmitBtn} type="submit" value="Send" />
      </section>

      {/* FAQs */}

      <section>
        <h3 style={{ fontSize: "24px", color: "#333" }}>
          Checkout our most Frequenty Asked Qustions
        </h3>
        <div onClick={toggleFAQ} className={styles.faqLink}>
          Click here
        </div>
        {isFAQOpen && <FAQModal onClose={toggleFAQ} />}
      </section>

      {/* email for contacting the support team */}

      <p>Email us: support@finnews.com</p>
    </div>
  );
}
