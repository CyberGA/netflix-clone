import { initializeApp } from "firebase/app";
import { FIREBASE_CONFIG } from "./secret";
// import { seedDatabase } from "../seed";

// config
const config = FIREBASE_CONFIG;

const firebaseApp = initializeApp(config);

//storing the data from the seed
// seedDatabase(firebase);

export { firebaseApp };
