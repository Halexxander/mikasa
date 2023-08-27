import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
import { FaBlogger } from 'react-icons/fa';
import { auth } from '../config/firebase'; // import the auth from your firebase config
import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // your existing login logic
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithRedirect(auth, provider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      console.error(error);
    }
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
        <button  className='google-login-button' onClick={handleGoogleLogin}><FaGoogle/>Login with Google</button> {/* Add the Google login button */}
      </form>
      <p className="redirect-text">
        Don't have an account? <Link to="/signup"><FaBlogger/>Sign up</Link>
      </p>
    </div>
  );
}

export default Login;