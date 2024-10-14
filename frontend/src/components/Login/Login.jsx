import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import axios from 'axios'; 
import commonendpoint from '../../common/CommonBackendEndpoints';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(commonendpoint.login.url, {
        email,
        password,
      });

      console.log("Login successful:", response.data);
      // Assuming response contains token or other auth info, handle storage here
      // For example: localStorage.setItem('authToken', response.data.token);

      // Redirect to home page after successful login
      navigate('/'); // Change this to your actual home route

    } catch (error) {
      console.error("Error during login:", error.response ? error.response.data : error.message);
      setErrorMessage("Login failed. Please check your credentials.");
    }
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
      </form>

      {/* Show error message */}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}

export default Login;
