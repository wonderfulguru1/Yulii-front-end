
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const firestoreStorage = getFirestore(app)
// const firestore = getFirestore(app);
// const storage = getStorage(app);

export {auth, googleProvider, firestoreStorage};

