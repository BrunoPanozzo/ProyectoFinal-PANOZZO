import { render } from 'preact'
import { App } from './app.jsx'
import './styles/app.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9mIxAxAzhG8xmekEQTCCHPmrNJYeL63I",
  authDomain: "samsung-ecommerce.firebaseapp.com",
  projectId: "samsung-ecommerce",
  storageBucket: "samsung-ecommerce.appspot.com",
  messagingSenderId: "473946043259",
  appId: "1:473946043259:web:68b8032e3c020dfc5583de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

render(<App />, document.getElementById('root'))
