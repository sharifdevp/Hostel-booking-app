import React from 'react';
import emoji from './emoji.jpg';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginForm() {
  const handleLogin = (event) => {
    // Add your login logic here
    alert('Login button clicked');
  };

  return (
    <div>
      <h4>Please login here</h4>
    <div className="loginform">
      
      <img src={emoji} className="emojilogo" alt="logo" />
      <h4>Username</h4>
      <input type="text" className="username-input" />
      <h4>Password</h4>
      <input type="password" className="password-input" />
      
      <div className="d-grid gap-2">
      <button className="loginbutton" onClick={handleLogin}>
        Login
      </button>
    </div>
      <p>Click on an emoji to view the emoji short name.</p>
      </div>
    </div>
  );
}
