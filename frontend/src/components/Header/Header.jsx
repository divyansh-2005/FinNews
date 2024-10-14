import React, { useEffect, useState } from "react";
import styles from "./Header.module.css"; 
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import axios from 'axios'; 
import commonendpoint from "../../common/CommonBackendEndpoints";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const fetchUserInfo = async (token) => {
    try {
      const response = await axios.get(commonendpoint.getUserInfo.url, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data);
      console.log(user);
    } catch (error) {
      console.error("Error fetching user info:", error);
      navigate('/login');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserInfo(token);
    }
  }, []);


  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  const handleUserDropdownToggle = () => {
    setUserDropdownOpen((prev) => !prev);
  };
  
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
            src={"/search.png"}
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
            Blogs
          </Link>
          <Link to="/myfeed" onClick={handleLinkClick}>
            My Feed
          </Link>
          <Link to="" onClick={handleLinkClick}>
            News
          </Link>
          <Link to="" onClick={handleLinkClick}>
            Schemes
          </Link>
          <Link to="/newsletter" onClick={handleLinkClick}>
            Newsletter
          </Link>

           {/* Show "Sign In / Sign Up" if not logged in, else show user name */}
           {user ? (
            <div className={styles.userInfo}>
              <div  className={styles.userIcon}
                onClick={handleUserDropdownToggle}>
              <FaRegUserCircle />
              </div>
              <span className={styles.userName}>{user.name}</span> 
              {userDropdownOpen && (
                <button
                  onClick={handleLogout}
                  className={styles.logoutButton}
                >
                  Logout
                </button>
              )}
            </div>
          ) : (
            <Link to="/signup" onClick={handleLinkClick}>
              <button className={styles.dropdownSignUp}>Sign In / Sign Up</button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
