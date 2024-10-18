import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., Firebase or API call)
    console.log("Login details:", email, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.heading}>Login</h2>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={styles.inputField}
          required
        />
        <div className={styles.passwordField}>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={styles.inputField}
            required
          />
          <button type="button" onClick={togglePasswordVisibility} className={styles.eyeButton}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button type="submit" className={styles.submitButton}>Login</button>
        <p className={styles.notAMember}>
          Not a member? <Link to="/signup" onClick={handleLinkClick} className={styles.signUpLink}>Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
