import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBBXVU7suetmj9HGy0FthQdK1W85ybaCVg",
    authDomain: "sistema-b7a01.firebaseapp.com",
    projectId: "sistema-b7a01",
    storageBucket: "sistema-b7a01.appspot.com",
    messagingSenderId: "655392980989",
    appId: "1:655392980989:web:417f57a2e5b5c79fe12394",
    measurementId: "G-Z99MBDCM1Y"
  };
  
  // Initialize Firebase
  if(!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
  