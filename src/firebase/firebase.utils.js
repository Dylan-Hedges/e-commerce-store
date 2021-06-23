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

//Creates a new user in the firestore database - takes the user authentication object we get back when authenticating with firebase and uses it to create a user in the firestore database, additonalData is any additonal data we might need
export const createUserProfileDocument = async (userAuth, additionalData) =>{
  //Exits function if user is not signed in - i.e. if the user auth object from firebase does not exist then exit from function
  if(!userAuth) return;
  //References the document for this user in the firestore databse - async request, looks in the collection "users" then looks for the document that matches the user id (this is the id generted by firebase when the user authenticates), at this point we do not yet have the data for the user
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //Pulls the data for this user from the firestore database - performs a GET request on the document for this user
  const snapShot = await userRef.get();
  //If the user does not exist in the firestore database - i.e. if there is no data in the firestore database
  if(!snapShot.exists){
    //Deconstruct the displayName and email from userAuth
    const {displayName, email} = userAuth;
    //Save the current date and time
    const createdAt = new Date();
    try{
      //Create a new user in the firestore database - async request, uses the below data and creates a new document for the user
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(error){
      console.log('error creating user', error.message);
    }
  }
  //Returns userRef - can be used in code elsewhere
  return userRef;
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
