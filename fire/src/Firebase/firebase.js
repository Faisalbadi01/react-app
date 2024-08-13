// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBg5KZ9CD4zUqBsZccleW-cWgSPnVTw6IM",
    authDomain: "first1-71bdb.firebaseapp.com",
    projectId: "first1-71bdb",
    storageBucket: "first1-71bdb.appspot.com",
    messagingSenderId: "423741923826",
    appId: "1:423741923826:web:1eb9304ad134adb1654b6b",
    measurementId: "G-RYJ4JKT3SN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export   const db = getFirestore(app)