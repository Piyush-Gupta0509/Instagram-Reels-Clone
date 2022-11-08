// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIK4WdKbtonlcvhgWiYNmK0M6ObQQ694A",
  authDomain: "instagram-reels-c19f8.firebaseapp.com",
  projectId: "instagram-reels-c19f8",
  storageBucket: "instagram-reels-c19f8.appspot.com",
  messagingSenderId: "312839923810",
  appId: "1:312839923810:web:1741e9129da12b68b0493b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, storage, db };
