import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDx5EtR0vJlTLG-qPRLIea6bIQNwlWyC5A",
  authDomain: "yaeger-c49c8.firebaseapp.com",
  projectId: "yaeger-c49c8",
  storageBucket: "yaeger-c49c8.appspot.com",
  messagingSenderId: "487610470768",
  appId: "1:487610470768:web:4a394763bab443966effb5",
  measurementId: "G-3QMNL38200"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)


