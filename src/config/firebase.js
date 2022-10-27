// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqgN6iUM4dKP8vi8iV4fsggZnZp4K2W7A",
  authDomain: "newstl-c6c23.firebaseapp.com",
  projectId: "newstl-c6c23",
  storageBucket: "newstl-c6c23.appspot.com",
  messagingSenderId: "746886550235",
  appId: "1:746886550235:web:dce139eda28ee29464f2fe",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {auth};