import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBOqqHtMGI0nZzB51RuZkJ5Nxog2QYSYco",
    authDomain: "friendzone-a.firebaseapp.com",
    projectId: "friendzone-a",
    storageBucket: "friendzone-a.appspot.com",
    messagingSenderId: "295008398125",
    appId: "1:295008398125:web:e6968dfb4c217ec43c81a4",
    measurementId: "G-9JC9TPF22G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth, firebaseApp}