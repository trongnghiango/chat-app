// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from  "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjE7ZmQxY-8mr0Lwa0MxXrROQ8q7-1Tdg",
  authDomain: "chat-app-f3127.firebaseapp.com",
  projectId: "chat-app-f3127",
  storageBucket: "chat-app-f3127.appspot.com",
  messagingSenderId: "226139221314",
  appId: "1:226139221314:web:4b4a3ae5bca09ae179acdb",
  measurementId: "G-91JWPBVJ8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

export default app;