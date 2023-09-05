import { initializeApp } from "firebase/app";
// import { FIREBASE_CONFIG } from "./secret";
// import { seedDatabase } from "../seed";

//& config
// const config = FIREBASE_CONFIG;
const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "netflix-clone-398b6.firebaseapp.com",
    databaseURL: "https://netflix-clone-398b6.firebaseio.com",
    projectId: "netflix-clone-398b6",
    storageBucket: "netflix-clone-398b6.appspot.com",
    messagingSenderId: "482723254815",
    appId: "1:482723254815:web:99aa6a8cb0454a4da63b2a",
    measurementId: "G-E2CM0PESV5"
};;

const firebaseApp = initializeApp(config);

//storing the data from the seed
// seedDatabase(firebase);

export { firebaseApp };
