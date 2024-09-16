// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8', // Soft gray background
        padding: '20px',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          maxWidth: '900px', // Slightly smaller max width for a cleaner layout
          width: '100%',
        }}
      >
        <h1
          style={{
            marginBottom: '40px',
            fontSize: '3em',
            color: '#333333', // Dark gray text
            fontWeight: 'bold', // Bold heading
          }}
        >
          Welcome to Fruit.ai
        </h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Responsive grid layout
            gap: '30px', // More space between items
            justifyItems: 'center',
            width: '100%',
          }}
        >
          {/* Box for Chat */}
          <Link
            to="/chat"
            style={{
              textDecoration: 'none',
              color: '#ffffff',
              fontSize: '1.2em',
              backgroundColor: '#2196f3', // Blue color for Chat
              padding: '20px',
              borderRadius: '12px',
              width: '250px',
              textAlign: 'center',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', // Softer shadow
              transition: 'background-color 0.3s ease, transform 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#1976d2'; // Darker blue on hover
              e.currentTarget.style.transform = 'translateY(-5px)'; // Slight lift on hover
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#2196f3';
              e.currentTarget.style.transform = 'translateY(0)'; // Return to normal position
            }}
          >
            Chat
          </Link>

          {/* Box for Translator */}
          <Link
            to="/translator"
            style={{
              textDecoration: 'none',
              color: '#ffffff',
              fontSize: '1.2em',
              backgroundColor: '#ff9800', // Orange color for Translator
              padding: '20px',
              borderRadius: '12px',
              width: '250px',
              textAlign: 'center',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s ease, transform 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#f57c00'; // Darker orange on hover
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#ff9800';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Translator
          </Link>

          {/* Box for About */}
          <Link
            to="/about"
            style={{
              textDecoration: 'none',
              color: '#ffffff',
              fontSize: '1.2em',
              backgroundColor: '#9c27b0', // Purple color for About
              padding: '20px',
              borderRadius: '12px',
              width: '250px',
              textAlign: 'center',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s ease, transform 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#7b1fa2'; // Darker purple on hover
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#9c27b0';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
