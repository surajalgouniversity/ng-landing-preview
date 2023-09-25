import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxR2DwOrWlglnoodloIVrd7xxevhqvOM8",
    authDomain: "quiz-app-cb933.firebaseapp.com",
    projectId: "quiz-app-cb933",
    storageBucket: "quiz-app-cb933.appspot.com",
    messagingSenderId: "592402382045",
    appId: "1:592402382045:web:83ff697260bf9585b82f34",
    measurementId: "G-F4FE0B6LBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {app, db, auth, provider};