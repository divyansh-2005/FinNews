import React, { useState } from 'react';
import styles from './Signup.module.css'; 
import { Link } from 'react-router-dom';
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here (e.g., Firebase or API call)
    console.log("Signup details:", email, password, confirmPassword);
  };

  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.heading}>SignUp</h2>
      <form onSubmit={handleSignup} className={styles.form}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={styles.inputField}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={styles.inputField}
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className={styles.inputField}
          required
        />
        <button type="submit" className={styles.submitButton}>SignUp</button>
        <p className={styles.AMember}>Already a member ? <Link to="/login" className={styles.loginLink} onClick={handleLinkClick}>Login</Link></p>
        
      </form>
    </div>
  );
}

export default Signup;
