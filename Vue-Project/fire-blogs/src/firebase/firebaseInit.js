import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvNsGBGob6aH2lsp_XM82MYLkV7-kwrIc",
  authDomain: "fireblogs-4e26c.firebaseapp.com",
  projectId: "fireblogs-4e26c",
  storageBucket: "fireblogs-4e26c.appspot.com",
  messagingSenderId: "8063262239",
  appId: "1:8063262239:web:b7d7db63f93a78edd73f2a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
