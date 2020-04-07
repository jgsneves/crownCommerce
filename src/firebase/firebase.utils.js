import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCi_Xi-zXe30OraDpkNMhgnzMR7wisBwig",
    authDomain: "crown-commerce-db.firebaseapp.com",
    databaseURL: "https://crown-commerce-db.firebaseio.com",
    projectId: "crown-commerce-db",
    storageBucket: "crown-commerce-db.appspot.com",
    messagingSenderId: "1014553851731",
    appId: "1:1014553851731:web:11be9bb7d31f821ad953a6",
    measurementId: "G-NG4N02CEYZ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
