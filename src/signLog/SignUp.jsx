import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { auth, db } from '../config/firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './SignUp.css';



function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('')

  const signIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
    console.log(email, fullname, password);
    try {
        const docRef = await addDoc(collection(db, "users"), {
            fullname: fullname,
            email: email,
            password: password,



        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
const googleSignin = async () => {
  console.log('signup is working');

  await signInWithRedirect(auth, provider)
      .then((data) => {
          console.log(data);
          setUseremail(data.user.email)
          setuserName(data.user.displayName)
          setUserphoto(data.user.photoURL)
      })
      .catch((error) => {
          console.log(error.message);
      });
}



  return (
    <div className="signup-container">
      <h1 className="signup-heading">Sign Up</h1>
      <form className="signup-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="signup-button" onClick={signIn}>
          Sign Up
        </button>
        <button 
            value={googleSignin}
            onClick={googleSignin}> ...or, sign in with Google</button>

        {/* <button onClick={googleSignin}> Sign in with Google</button> */}
      </form>
      <p className="redirect-text">
        Already have an account? <Link to="/login"><FaUser/>Login</Link>
      </p>
    </div>
  );
}

export default SignUp;
 