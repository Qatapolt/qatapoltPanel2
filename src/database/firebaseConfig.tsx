// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTjog4ZVuAy8KzqtTUnvvXnRuHPnF5pgY",
  authDomain: "fir-test-42e19.firebaseapp.com",
  projectId: "fir-test-42e19",
  storageBucket: "fir-test-42e19.appspot.com",
  messagingSenderId: "613640046899",
  appId: "1:613640046899:web:88a0728efb318f6afc9646"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export {collection,getDocs}