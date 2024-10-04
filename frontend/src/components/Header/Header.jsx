import React from "react";
import styles from './Header.module.css'; // Import the CSS Module
import searchIcon from '../../assets/search-icon.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
      <span className="poppins-bold">FinNews</span>
      </div>

      <div className={styles.searchDiv}>
        <input type="text" placeholder="Search news..." className={styles.searchInput} />
        <button className={styles.searchButton}>
          <img src={"/search.png"} alt="Search" />
        </button>
      </div>

      <nav>
        <ul className={styles.navList}>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/myfeed">My Feeds</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/schemes">Schemes</Link></li>
          <li><Link to="/newsletter">Newsletter</Link></li>
        </ul>
      </nav>

      <div className={styles.authButton}>
        <button>Login/Signup</button>
      </div>
    </header>
  );
}

export default Header;
