// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDuKKB7rrsCEyfANB0N88yikJEz6zfRck4",
    authDomain: "deependraparmarportfolio.firebaseapp.com",
    projectId: "deependraparmarportfolio",
    storageBucket: "deependraparmarportfolio.appspot.com",
    messagingSenderId: "399318155982",
    appId: "1:399318155982:web:14d6270eaf925a94da869f",
    measurementId: "G-9CJKG0RPXQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();