// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId === 'dummy' && password === 'password') {
      setError('');
      navigate('/home');
    } else {
      setError('Invalid User ID or Password');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#e0e7ff', // Light blue background
      fontFamily: 'Montserrat, sans-serif', // Modern font
      padding: '20px',
    },
    form: {
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
    },
    inputBox: {
      marginBottom: '20px',
      textAlign: 'left',
    },
    input: {
      width: '100%',
      padding: '14px',
      borderRadius: '8px',
      border: '2px solid #cbd5e1', // Light gray border
      marginTop: '8px',
      fontSize: '16px',
      backgroundColor: '#f8fafc', // Very light gray background
    },
    button: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#4f46e5', // Dark blue button
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '18px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#3730a3', // Darker blue on hover
    },
    errorMessage: {
      color: '#d32f2f', // Red color for error
      marginBottom: '15px',
      fontSize: '14px',
    },
    heading: {
      marginBottom: '25px',
      color: '#1e293b', // Darker gray for text
      fontSize: '30px',
      fontWeight: '600',
    },
    label: {
      fontWeight: '500',
      fontSize: '14px',
      color: '#475569', // Gray for label
    },
    '@media (max-width: 600px)': {
      form: {
        padding: '25px',
      },
      heading: {
        fontSize: '22px',
      },
      input: {
        fontSize: '14px',
      },
      button: {
        fontSize: '16px',
      },
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login to Fruit.Ai</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputBox}>
          <label style={styles.label}>User ID</label>
          <input
            type="text"
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputBox}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        {error && <p style={styles.errorMessage}>{error}</p>}
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
