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

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();

   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
         });
      } catch (error) {
         console.log("Error creating user.", error.message);
      }
   }

   return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
