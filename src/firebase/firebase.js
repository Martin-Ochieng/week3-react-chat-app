// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from  "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDm2aGrkyQkMCYhyqINGTqeiQwLTi_519I",
    authDomain: "chat-app-7eb55.firebaseapp.com",
    projectId: "chat-app-7eb55",
    storageBucket: "chat-app-7eb55.firebasestorage.app",
    messagingSenderId: "679603163612",
    appId: "1:679603163612:web:55bf83f9f11db3d63d7f19",
    measurementId: "G-25RQLBTNKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth = getAuth(app);


export {app,auth};