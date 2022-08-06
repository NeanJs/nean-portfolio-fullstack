// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0-OSW193dUgcvAdEDaMCHRm5K1q13KUU",
  authDomain: "nean-web-v2.firebaseapp.com",
  databaseURL: "https://nean-web-v2-default-rtdb.firebaseio.com",
  projectId: "nean-web-v2",
  storageBucket: "nean-web-v2.appspot.com",
  messagingSenderId: "753005567005",
  appId: "1:753005567005:web:20ac049484e0e8c9e43af4",
  measurementId: "G-KF2JEK6S95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };
