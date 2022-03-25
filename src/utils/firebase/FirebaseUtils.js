import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiRzt4VBxfKuvUEzGg1a5TgiDVul2-aD0",
  authDomain: "crwn-clothing-hooks-db.firebaseapp.com",
  projectId: "crwn-clothing-hooks-db",
  storageBucket: "crwn-clothing-hooks-db.appspot.com",
  messagingSenderId: "275668771654",
  appId: "1:275668771654:web:932d5a77f4ef5e67103b47",
  measurementId: "G-BBB3QHK4KH",
};

const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error createing the user", error.message);
    }
  }

  return userDocRef;
};
