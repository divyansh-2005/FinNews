import React, { useState } from 'react';
import styles from './Header.module.css'; import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../constants/navbar';


const HeaderComp = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <section className={styles.outerNavContainer}>
            <div className={styles.innerNavContainer}>
                <header className={styles.header}>
                    <div className={styles.logo}>
                        <Link to="/" className={styles.finNews} onClick={handleLinkClick}>
                            <span className="poppins">FIN<span style={{ color: "#FE00E6" }}>NEWS</span></span>
                        </Link>
                    </div>
                    <div className={styles.searchBarConteiner}>
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
                    <div className={styles.navLinkContainer}>
                        <button className={styles.menuToggle} onClick={toggleMenu}>
                            {menuOpen ? '✖' : '☰'}
                        </button>

                        <nav className={styles.navContainer}>
                            <ul >
                                {
                                    NAV_LINKS?.map(({ id, path, title }) => (
                                        <li key={id}>
                                            <Link to={path} className={``} onClick={handleLinkClick}>
                                                {title}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                            <button className={styles.dropdownSignUp}>Sign In / Sign Up</button>
                        </nav>
                    </div>
                </header>
            </div>
        </section>
    )
}

export default HeaderComp