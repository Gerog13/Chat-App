import firebase from "firebase/app";
import "firebase/auth";
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDbbZ5W9ZEMWNklV4ONr8DNT_hgifelh1A",
    authDomain: "chatapp-625fa.firebaseapp.com",
    projectId: "chatapp-625fa",
    storageBucket: "chatapp-625fa.appspot.com",
    messagingSenderId: "647966490842",
    appId: "1:647966490842:web:c017e85a672a253bf9a5e3",
  })
  .auth();
