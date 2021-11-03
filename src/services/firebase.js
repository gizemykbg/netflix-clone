import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCICW9jrr8nrMZmeiSo2W6vv5PuWk6Ipsk",
  authDomain: "netflix-clone-2a808.firebaseapp.com",
  projectId: "netflix-clone-2a808",
  storageBucket: "netflix-clone-2a808.appspot.com",
  messagingSenderId: "984723830741",
  appId: "1:984723830741:web:c12b0f63a2c2ef88b02f5c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
