import React from 'react';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  error, 
  hint, 
  id, 
  className = '', 
  ...props 
}) => {
  return (
    <div className={`input-group ${className}`}>
      {label && <label htmlFor={id} className="input-label">{label}</label>}
      <input 
        id={id} 
        className={`input-field ${error ? 'input-error' : ''}`} 
        {...props} 
      />
      {error && <span className="input-error-msg">{error}</span>}
      {!error && hint && <span className="input-hint">{hint}</span>}
    </div>
  );
};
