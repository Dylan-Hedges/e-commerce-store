//Base import - allows us to import the parts of firebase we want to use in our app e.g. firestore and auth (we only want to import what we are using in our app, we dont need all of firebase)
import firebase from 'firebase/app';
//Allows us to use firebase database in our app - firebase.firestore()
import'firebase/firestore';
//Allows us to use firebase authentication in our app - friebase.auth()
import 'firebase/auth';

//Config from console.firebaase.google.com
const config = {
    apiKey: "AIzaSyBg-TjpgGAm_IidHsnJGD70r4cXbDJDJGs",
    authDomain: "crwn-db-9.firebaseapp.com",
    projectId: "crwn-db-9",
    storageBucket: "crwn-db-9.appspot.com",
    messagingSenderId: "214201628173",
    appId: "1:214201628173:web:117c6112f8f0ed68714744",
    measurementId: "G-YCYNQCM22C"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Gives access to the GoogleAuthProvider class from the google authentication library
const provider = new firebase.auth.GoogleAuthProvider();

//Triggers google sign in pop up
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
