import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAGybYGIcer01j9pxMEfdOB7s4LV8tTTPk",
    authDomain: "e-commerce-18ea1.firebaseapp.com",
    projectId: "e-commerce-18ea1",
    storageBucket: "e-commerce-18ea1.appspot.com",
    messagingSenderId: "228976634987",
    appId: "1:228976634987:web:75e7ecd0e51d14cdfbd52e",
    measurementId: "G-5HEJDDP5QF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };
