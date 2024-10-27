import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Add your login logic here (e.g., Firebase or API call)
    try {
      // Mock login logic
      if (email === 'test@example.com' && password === 'password') {
        console.log('Login successful');
        // Redirect to the dashboard or home page here
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.heading}>Login</h2>
      <form onSubmit={handleLogin} className={styles.form} aria-labelledby="login-heading">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={styles.inputField}
          required
          aria-label="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={styles.inputField}
          required
          aria-label="Password"
        />
        {error && <p className={styles.errorMessage}>{error}</p>}
        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <p className={styles.notAMember}>
          Not a member? <Link to="/signup" className={styles.signUpLink}>Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
