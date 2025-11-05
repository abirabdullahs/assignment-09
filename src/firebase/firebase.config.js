// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAR3Hy-QV43_sAVW-1klFqSHmhN8soW4E",
  authDomain: "skills-assignment-project.firebaseapp.com",
  projectId: "skills-assignment-project",
  storageBucket: "skills-assignment-project.firebasestorage.app",
  messagingSenderId: "323814916575",
  appId: "1:323814916575:web:7367fb26c74bd27692846a"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
