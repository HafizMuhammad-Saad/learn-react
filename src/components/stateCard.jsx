// StatCard.jsx
import React from 'react';

const StatCard = ({ title, number }) => {
  return (
    <div style={{
      backgroundColor: '#f0f0f0',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h3>{title}</h3>
      <h1>{number}</h1>
    </div>
  );
};

export default StatCard;
