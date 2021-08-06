import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { FIREBASE_CONFIG } from "./secret";
// import { seedDatabase } from "../seed";

// config
const config = FIREBASE_CONFIG;

const firebase = Firebase.initializeApp(config);

//storing the data from the seed
// seedDatabase(firebase);

export { firebase };
