import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDG7VXg7a1XOLhgg1RdYpSzM_5S5ZSVzfw",
  authDomain: "netshack-a8b21.firebaseapp.com",
  projectId: "netshack-a8b21",
  storageBucket: "netshack-a8b21.appspot.com",
  messagingSenderId: "658532782853",
  appId: "1:658532782853:web:960b4739a57090a721dd6c",
  measurementId: "G-V55QFW6M9W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)


