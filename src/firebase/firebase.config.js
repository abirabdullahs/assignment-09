// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// This file reads Firebase configuration from environment variables.
// Create a `.env` or `.env.local` at the project root with VITE_FIREBASE_* keys
// Example (.env.local):
// VITE_FIREBASE_API_KEY=your_api_key_here
// VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
// VITE_FIREBASE_PROJECT_ID=your_project_id_here
// VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
// VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
// VITE_FIREBASE_APP_ID=your_app_id_here

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
