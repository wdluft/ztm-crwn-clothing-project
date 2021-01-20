/* eslint-disable no-useless-return */
import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyB8XnnaEfrFlu73jgBd_FfrYflN49xQ21w',
  authDomain: 'crwn-db-c9413.firebaseapp.com',
  projectId: 'crwn-db-c9413',
  storageBucket: 'crwn-db-c9413.appspot.com',
  messagingSenderId: '278014061464',
  appId: '1:278014061464:web:64dfcb2fa432799a8b59ed',
  measurementId: 'G-Q13DJRXSRT',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
