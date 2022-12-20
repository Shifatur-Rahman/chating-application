import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
