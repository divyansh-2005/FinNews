import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import axios from 'axios'; 
import commonendpoint from '../../common/CommonBackendEndpoints';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(commonendpoint.login.url, {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);

      console.log("Login successful:", response.data);
      // Assuming response contains token or other auth info, handle storage here
      // For example: localStorage.setItem('authToken', response.data.token);

      setMessage("Login successful!");
      // Redirect to home page after successful login
      navigate('/');

    } catch (error) {
      console.error("Error during login:", error.response ? error.response.data : error.message);
      setMessage("Login failed. Please check your credentials.");
    }
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    // Add your Google login logic here
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
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={styles.inputField}
          required
        />
        <button type="submit" className={styles.submitButton}>Login</button>
      <button onClick={handleGoogleSignIn} className={styles.googleButton}>Sign In with Google</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
      <p className={styles.signupLink}>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;