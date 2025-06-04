// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyDxgBU9JnB-N0pgmBU7jEZW9r8nvJRCoG8",
    authDomain: "buffandgo-6111d.firebaseapp.com",
    projectId: "buffandgo-6111d",
    storageBucket: "buffandgo-6111d.firebasestorage.app",
    messagingSenderId: "363424446603",
    appId: "1:363424446603:web:86d7b6c7c8097cb06c3c8e",
    measurementId: "G-448887DCDE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const messaging = getMessaging(app);

export { app, db, auth, messaging };
