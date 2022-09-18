import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAH6unCU18SMGMFhEG2A2Q3H_MgBuH3ch0",
  authDomain: "logitech---marcos-parella.firebaseapp.com",
  projectId: "logitech---marcos-parella",
  storageBucket: "logitech---marcos-parella.appspot.com",
  messagingSenderId: "54697532833",
  appId: "1:54697532833:web:ccfcad7053b2f716f47fe0"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App/>
  // </React.StrictMode>
);
reportWebVitals();
