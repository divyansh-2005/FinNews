import React, { useState, useEffect } from "react";
import styles from "./Header.module.css"; // Import the CSS Module
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Load the Lordicon script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup the script on unmount
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/" className={styles.finNews} onClick={handleLinkClick}>
            <span className="poppins">
              FIN<span style={{ color: "#FE00E6" }}>NEWS</span>
            </span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
          <img
            src="/search.png"
            alt="Search Icon"
            className={styles.searchIcon}
          />
        </div>

        {/* Menu Toggle Button for Mobile */}
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
          <Link to="/blogs" onClick={handleLinkClick}>
            <span className={styles.navItem}>
              <lord-icon
                src="https://cdn.lordicon.com/fikcyfpp.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#fe00e6"
                style={{ width: "25px", height: "25px" }}
              ></lord-icon>
              Blogs
            </span>
          </Link>
          <Link to="/myfeed" onClick={handleLinkClick}>
            <span className={styles.navItem}>
              <lord-icon
                src="https://cdn.lordicon.com/cvwrvyjv.json"
                trigger="morph"
                state="morph-select"
                colors="primary:#ffffff,secondary:#cf91b5"
                style={{ width: "25px", height: "25px" }}
              ></lord-icon>
              My Feed
            </span>
          </Link>
          <Link to="" onClick={handleLinkClick}>
            <span className={styles.navItem}>
              <lord-icon
                src="https://cdn.lordicon.com/fjvfsqea.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#fe00e6"
                style={{ width: "25px", height: "25px" }}
              ></lord-icon>
              News
            </span>
          </Link>
         <Link to="" onClick={handleLinkClick}>
            <span className={styles.navItem}>
              <lord-icon
                src="https://cdn.lordicon.com/sjoccsdj.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#fe00e6"
                style={{ width: "25px", height: "25px" }}
              ></lord-icon>
              Schemes
            </span>
          </Link>
          <Link to="/newsletter" onClick={handleLinkClick}>
            <span className={styles.navItem}>
              <lord-icon
                src="https://cdn.lordicon.com/vpbspaec.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#fe00e6"
                style={{ width: "25px", height: "25px" }}
              ></lord-icon>
              Newsletter
            </span>
          </Link>
          <Link to="/login" onClick={handleLinkClick}>
            <span className={styles.navItem}>
              <lord-icon
                src="https://cdn.lordicon.com/kdduutaw.json"
                trigger="morph"
                state="morph-group"
                colors="primary:#ffffff,secondary:#fe00e6"
                style={{ width: "25px", height: "25px" }}
              ></lord-icon>
              Sign In / Sign Up
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
