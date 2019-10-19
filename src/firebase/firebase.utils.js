import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyApypxzigljH3lbte4tbikyJ3o5bc9JyuQ",
    authDomain: "ecommerce-db-618c4.firebaseapp.com",
    databaseURL: "https://ecommerce-db-618c4.firebaseio.com",
    projectId: "ecommerce-db-618c4",
    storageBucket: "",
    messagingSenderId: "373175541215",
    appId: "1:373175541215:web:9b819732b22ac685e5386a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
