import React from "react";
import styles from './Header.module.css'; // Import the CSS Module
import searchIcon from '../../assets/search-icon.png';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header2}>
        <div className={styles.navLinks}>
          <div className={styles.navSection}>
            <a href="#" className={styles.finNews}>FIN NEWS</a>
            <a href="/myfeed">My Feed</a>
            <a href="#">News</a>
            <a href="#">Schemes</a>
            <a href="#">Newsletter</a>
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.searchContainer}>
            <div className={styles.searchIconWrapper}>
              <input
                type="text"
                placeholder="Search"
                className={styles.searchInput}
              />
              <img src={searchIcon} alt="Search Icon" className={styles.searchIcon} />
            </div>
          </div>
          <Link to="/auth/login" >
          <button className={styles.loginSignUp}>Login / Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
