import firebase from "firebase/app"
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBwAwBrUOgiWDkTxbX19cSXbuKSpclU_4A",
  authDomain: "e-commerce-db-e6259.firebaseapp.com",
  databaseURL: "https://e-commerce-db-e6259.firebaseio.com",
  projectId: "e-commerce-db-e6259",
  storageBucket: "e-commerce-db-e6259.appspot.com",
  messagingSenderId: "94076432655",
  appId: "1:94076432655:web:14b570e1967cd61d600e7a",
  measurementId: "G-5LEHSQRDHL"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({ displayName, email, createdAt, photoURL, ...additionalData })
    } catch (error) {
      console.log("error creating user ", error.message)
    }
  }
  return userRef;
}

//google provider
const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => {
  return auth.signInWithPopup(googleProvider)
}


export default firebase;