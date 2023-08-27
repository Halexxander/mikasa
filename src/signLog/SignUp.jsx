import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { auth, db } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import "./SignUp.css";
import { collection, addDoc } from 'firebase/firestore';

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [recaptcha, setRecaptcha] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const signIn = async () => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await addDoc(collection(db, "info"), {
      fullname: fullname,
      email: user.email,
      uid: user.uid,
    });
  };

  const googleSignin = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    await addDoc(collection(db, "info"), {
      fullname: user.displayName,
      email: user.email,
      image: user.photoURL,
      uid: user.uid,
    });
  };

  const facebookSignin = async () => {
    const result = await signInWithPopup(auth, facebookProvider);
    const user = result.user;
    await addDoc(collection(db, "info"), {
      fullname: user.displayName,
      email: user.email,
      image: user.photoURL,
      uid: user.uid,
    });
  };

  const phoneSignin = async () => {
    if (!recaptcha) {
      const verifier = new RecaptchaVerifier('recaptcha-container');
      setRecaptcha(verifier);
    }
    const result = await signInWithPhoneNumber(auth, phoneNumber, recaptcha);
    setConfirmationResult(result);
  };

  const confirmCode = async () => {
    try {
      const userCredential = await confirmationResult.confirm(verificationCode);
      const user = userCredential.user;
      await addDoc(collection(db, "info"), {
        fullname: user.displayName,
        phoneNumber: user.phoneNumber,
        uid: user.uid,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-heading">Sign Up</h1>
      <div className="signup-form">
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
        <button onClick={googleSignin}>Sign in with Google</button>
        <button onClick={facebookSignin}>Sign in with Facebook</button>
        {/* <div id="recaptcha-container"></div>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button onClick={phoneSignin}>Send Verification Code</button>
        <input
          type="text"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <button onClick={confirmCode}>Confirm Verification Code</button>
      </div> */}
      </div>
      <p className="redirect-text">
        Already have an account?{" "}
        <Link to="/login">
          <FaUser />
          Login
        </Link>
      </p>
    </div>
  );
}

export default SignUp;