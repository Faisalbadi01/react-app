
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcF-bwe4IdbpjjLFo1A2vvjLHn7PZgnRc",
    authDomain: "curd1-a094c.firebaseapp.com",
    projectId: "curd1-a094c",
    storageBucket: "curd1-a094c.appspot.com",
    messagingSenderId: "192948350847",
    appId: "1:192948350847:web:28d8034354cc0e1872344a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)