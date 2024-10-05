import React, { useState } from "react";
import styles from './Header.module.css'; // Import the CSS Module
import searchIcon from '../../assets/search-icon.png'; // Ensure path is correct
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
            FIN NEWS
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
            src={searchIcon}
            alt="Search Icon"
            className={styles.searchIcon}
          />
        </div>

        {/* Menu Toggle Button for Mobile */}
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'}
        </button>

        {/* Navigation Links */}
        <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
          <Link to="/blogs" onClick={handleLinkClick}>Blogs</Link>
          <Link to="/myfeed" onClick={handleLinkClick}>My Feed</Link>
          <Link to="" onClick={handleLinkClick}>News</Link>
          <Link to="" onClick={handleLinkClick}>Schemes</Link>
          <Link to="" onClick={handleLinkClick}>Newsletter</Link>

          {/* Sign In/Sign Up Button within the Dropdown */}
          <button className={styles.dropdownSignUp}>Sign In / Sign Up</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
