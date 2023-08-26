// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_hBsY6kAFiPZwUCSd8-JkRVgSyjZqvbM",
  authDomain: "qatapolt-2023.firebaseapp.com",
  projectId: "qatapolt-2023",
  storageBucket: "qatapolt-2023.appspot.com",
  messagingSenderId: "146031539666",
  appId: "1:146031539666:web:e1061374efc79a0a3bc40b",
  measurementId: "G-QBRT4HK4S3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export {collection,getDocs}

// Import the functions you need from the SDKs you need
