import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCNDLIrcrFoRt3dzvwzziT_RauNH3j1twk",
    authDomain: "react-assignment-eb65d.firebaseapp.com",
    projectId: "react-assignment-eb65d",
    storageBucket: "react-assignment-eb65d.appspot.com",
    messagingSenderId: "604033202924",
    appId: "1:604033202924:web:900eb951e57a415fde83c9",
    measurementId: "G-PBZ3C1KB9M"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth,provider}
  export default db