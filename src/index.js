import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// console.forebase.google.com   kan@gmail.com  Kan123
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCQxKS1thg-QN9QWPMqBljZwN1n5bYUsI",
  authDomain: "react-blog-auth-3fb43.firebaseapp.com",
  projectId: "react-blog-auth-3fb43",
  storageBucket: "react-blog-auth-3fb43.firebasestorage.app",
  messagingSenderId: "336605843872",
  appId: "1:336605843872:web:22b2d563e54b95487914c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
