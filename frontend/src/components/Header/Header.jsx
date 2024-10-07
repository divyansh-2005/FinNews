import React, { useState } from "react";
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/" className={styles.finNews} onClick={handleLinkClick}>
            <span className="poppins">FIN<span style={{ color: "#FE00E6" }}>NEWS</span></span>
          </Link>
        </div>

        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
          <img
            src={"/search.png"}
            alt="Search Icon"
            className={styles.searchIcon}
          />
        </div>

        <button className={styles.menuToggle} onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'}
        </button>

        {/* Overlay */}
        {menuOpen && <div className={`${styles.overlay} ${menuOpen ? styles.active : ''}`} onClick={handleLinkClick} />}

        {/* Navigation Links */}
        <nav className={`${styles.desktopNavbar}`}>
          <Link to="/blogs" onClick={handleLinkClick}>Blogs</Link>
          <Link to="/myfeed" onClick={handleLinkClick}>My Feed</Link>
          <Link to="" onClick={handleLinkClick}>News</Link>
          <Link to="" onClick={handleLinkClick}>Schemes</Link>
          <Link to="" onClick={handleLinkClick}>Newsletter</Link>

          <button className={styles.dropdownSignUp}>Sign In / Sign Up</button>
        </nav>

        <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
          <Link to="/blogs" onClick={handleLinkClick}>Blogs</Link>
          <Link to="/myfeed" onClick={handleLinkClick}>My Feed</Link>
          <Link to="" onClick={handleLinkClick}>News</Link>
          <Link to="" onClick={handleLinkClick}>Schemes</Link>
          <Link to="" onClick={handleLinkClick}>Newsletter</Link>

          <button className={styles.dropdownSignUp}>Sign In / Sign Up</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
