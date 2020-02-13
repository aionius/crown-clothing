import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
   apiKey: "AIzaSyBvOam-Nh6hIhngG0Qiw9EJultkREXvRls",
   authDomain: "crown-db-14727.firebaseapp.com",
   databaseURL: "https://crown-db-14727.firebaseio.com",
   projectId: "crown-db-14727",
   storageBucket: "crown-db-14727.appspot.com",
   messagingSenderId: "1020108671732",
   appId: "1:1020108671732:web:f8083bbc6de4286d46aca1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
