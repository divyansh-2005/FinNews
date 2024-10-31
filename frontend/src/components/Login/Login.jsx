import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLinkClick = () => {
    // Reset menu state or perform any action upon link click, if needed
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Simulated API call here
      console.log("Login details:", email, password, rememberMe);
      
      // Placeholder for success handling
      setIsLoading(false);
    } catch (error) {
      setError("Failed to login. Please check your credentials.");
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
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
        <div className={styles.passwordContainer}>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={styles.inputField}
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={styles.showPasswordButton}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div className={styles.rememberMeContainer}>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            id="rememberMe"
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <button type="submit" className={styles.submitButton}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
        <p className={styles.notAMember}>
          Not a member? <Link to="/signup" onClick={handleLinkClick} className={styles.signUpLink}>Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
