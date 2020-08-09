import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB1R6gTyEgxcr27I0IoSc95mqJMFg3bKdI",
    authDomain: "crwn-db-a86ca.firebaseapp.com",
    databaseURL: "https://crwn-db-a86ca.firebaseio.com",
    projectId: "crwn-db-a86ca",
    storageBucket: "crwn-db-a86ca.appspot.com",
    messagingSenderId: "105656545197",
    appId: "1:105656545197:web:1a4be2c05ec9be216c7b24",
    measurementId: "G-5ZQC0TS0S2"
  }

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});

  export const signInWithGoogle = () =>  auth.signInWithPopup(provider);

  export default firebase;