import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA6NC2xJHgk4Ok-9cbycqxwuwZpxa090AM",
    authDomain: "pokemon-game-e051d.firebaseapp.com",
    databaseURL: "https://pokemon-game-e051d-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-e051d",
    storageBucket: "pokemon-game-e051d.appspot.com",
    messagingSenderId: "706420270360",
    appId: "1:706420270360:web:024821e9f5d9d9384d2a6d"
};

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = firebase.database();

export default database;
