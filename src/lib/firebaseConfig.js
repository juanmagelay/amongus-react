// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNshcsbv6Ub63S707VWATLIbr9kRsWNmQ",
  authDomain: "amongus-react.firebaseapp.com",
  projectId: "amongus-react",
  storageBucket: "amongus-react.appspot.com",
  messagingSenderId: "358133388359",
  appId: "1:358133388359:web:f5e1f859d34a2795cb0d62",
  measurementId: "G-517H4PV7QP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;