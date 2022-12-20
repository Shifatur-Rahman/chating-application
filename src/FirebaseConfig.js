// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-jFI3o0uZMWNUCF0AI75uoH4JwOTATgc",
  authDomain: "chating-application-c3171.firebaseapp.com",
  projectId: "chating-application-c3171",
  storageBucket: "chating-application-c3171.appspot.com",
  messagingSenderId: "155294054922",
  appId: "1:155294054922:web:fc74aa85edbe9ac7c2fdf3",
  measurementId: "G-TNX9HM11YL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
