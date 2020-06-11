import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";

const config = {
  apiKey: "AIzaSyAg6b8iW4Ls7IDOlYbMrlXT13ugzs57CIw",
  authDomain: "crwn-db-7f132.firebaseapp.com",
  databaseURL: "https://crwn-db-7f132.firebaseio.com",
  projectId: "crwn-db-7f132",
  storageBucket: "crwn-db-7f132.appspot.com",
  messagingSenderId: "454587407264",
  appId: "1:454587407264:web:69cfe8bf3a5722067962c5",
  measurementId: "G-37BZRCXGGJ",
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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
