import { initializeApp } from "firebase/app";
// This line down there is for authentication
import { getAuth } from 'firebase/auth'

// This line down there is for firestore
import { getFirestore } from 'firebase/firestore'

// This line down there is for firestore
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC7IzvRxKRE_XwQJ6bZIF-j8XFNELgsTSg",
  authDomain: "auth-efaa9.firebaseapp.com",
  projectId: "auth-efaa9",
  storageBucket: "auth-efaa9.appspot.com",
  messagingSenderId: "827074984736",
  appId: "1:827074984736:web:af2d857d8a498d607ef545"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// This line down there is for authentication
export const auth = getAuth(app);

// This line down there is for firestore
export const db = getFirestore(app);

// This line down there is for storage for image and files
export const storage = getStorage(app);