import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, push } from "firebase/database";

// Firebase configuration
const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDERID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const app = initializeApp(config);
const database = getDatabase(app);
export { database, ref, onValue, push };
