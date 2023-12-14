import React, { useState } from 'react';
import emoji from './emoji.jpg';
import './Register.css';

export default function RegisterForm() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Add your registration logic here
    alert('Registration successful');
  };

  return (
    <div>
    <h4>Registration Form</h4>
    <div className="registration-form">
      
      <img src={emoji} className="emojilogo" alt="logo" />
      <h4>Full Name</h4>
      <input
        type="text"
        className="full-name-input"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <h4>Username</h4>
      <input
        type="text"
        className="username-input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <h4>Email</h4>
      <input
        type="email"
        className="email-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <h4>Password</h4>
      <input
        type="password"
        className="password-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <h4>Confirm Password</h4>
      <input
        type="password"
        className="confirm-password-input"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <div className="d-grid gap-2">
      <button className="registerbutton" onClick={handleRegister}>
        Register
      </button>
      </div>
      </div>
    </div>
  );
}