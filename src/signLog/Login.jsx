import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
import { FaBlogger } from 'react-icons/fa';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
 
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form className="login-form">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </form>
      <p className="redirect-text">
        Don't have an account? <Link to="/signup"><FaBlogger/>Sign up</Link>
      </p>
    </div>
  );
}

export default Login;