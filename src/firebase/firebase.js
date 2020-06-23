import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import firebaseConfig from "../firebase_config/firebase.config";

firebase.initializeApp(firebaseConfig);

export const createUserProfile = async (userAuth, otherData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  try {
  const date = new Date();
  const data = {
    name: userAuth.displayName,
    email: userAuth.email,
    created_at: date
  };

    if (!snapshot.exists) {
     await userRef.set({...data, ...otherData});
    }
  } catch (err) {
    console.log(err);
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
