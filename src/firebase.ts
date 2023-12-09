
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCzRyP-rBzUbEX2C_kwu5rPYXbz8xfwA98",
  authDomain: "intouch-dev-269817-de0b4.firebaseapp.com",
  projectId: "intouch-dev-269817-de0b4",
  storageBucket: "intouch-dev-269817-de0b4.appspot.com",
  messagingSenderId: "907465139153",
  appId: "1:907465139153:web:7e6e252986acc260d176f0",
  measurementId: "G-CLYRMPJ5VB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const firestoreStorage = getFirestore(app)
// const firestore = getFirestore(app);
// const storage = getStorage(app);

export {auth, googleProvider, firestoreStorage};

