import firebase from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDnaSMCSLULzkeGe-l0zjnUFH9s-QOZcDs",
    authDomain: "invoice-cb5bb.firebaseapp.com",
    projectId: "invoice-cb5bb",
    storageBucket: "invoice-cb5bb.appspot.com",
    messagingSenderId: "328234498158",
    appId: "1:328234498158:web:f6610e7788c46304594e7f"
  };

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore();

  export {projectFirestore};