import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbtm_Fh-w0bmQKAtFft9j9yauIYZPLLJk",
    authDomain: "clone-sg.firebaseapp.com",
    projectId: "clone-sg",
    storageBucket: "clone-sg.appspot.com",
    messagingSenderId: "1060826383114",
    appId: "1:1060826383114:web:f0233d9f4ee862e11130f3",
    measurementId: "G-M2J4Y7Q3WT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};