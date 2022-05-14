// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY ,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN ,
  // projectId: process.env.REACT_APP_PROJECT_ID ,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET ,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID ,
  // appId: process.env.REACT_APP_APP_ID,



  apiKey: "AIzaSyA-lh5Dcj62NdkZkfVZB2EvH0mnbs8FMWY",
  authDomain: "doctor-portal-668ed.firebaseapp.com",
  projectId: "doctor-portal-668ed",
  storageBucket: "doctor-portal-668ed.appspot.com",
  messagingSenderId: "123339892314",
  appId: "1:123339892314:web:a90731de8f9d1a4945da63"
};
console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;