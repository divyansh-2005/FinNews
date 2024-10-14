import React, { useState } from 'react';
import styles from './Signup.module.css'; 
import axios from 'axios'; 
import commonendpoint from '../../common/CommonBackendEndpoints'; // Import the common backend endpoint

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(commonendpoint.signup.url, {
        name,
        email,
        password,
      });
      setMessage("User registered successfully!");
      console.log("Signup successful:", response.data);
      // Perform any post-signup actions like redirecting to another page
    } catch (error) {
      console.error("Error during signup:", error.response ? error.response.data : error.message);
      setMessage("Signup failed. Please try again.");
    }
  };

  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.heading}>SignUp</h2>
      <form onSubmit={handleSignup} className={styles.form}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className={styles.inputField}
          required
        />
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
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}

export default Signup;
