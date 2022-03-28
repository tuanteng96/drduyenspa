import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD1vBN7TYiqzNWFuQzo-_NRh0rLsVRd9No",
    authDomain: "drduyenspa-163f9.firebaseapp.com",
    projectId: "drduyenspa-163f9",
    storageBucket: "drduyenspa-163f9.appspot.com",
    messagingSenderId: "206984935331",
    appId: "1:206984935331:web:c07eb994bef05fed604c16",
    measurementId: "G-5Q0RR71FM9"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };