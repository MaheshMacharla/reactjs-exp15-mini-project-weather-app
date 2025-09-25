import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-message">
        <div className="error-icon">⚠️</div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
