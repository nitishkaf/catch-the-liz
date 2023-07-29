import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, set, ref, onValue } from "firebase/database";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDERID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
// @ts-ignore
export const signInWithGooglePopup = () =>
  // @ts-ignore
  signInWithGooglePopup(auth, googleProvider);

const analytics = getAnalytics(app);
const database = getDatabase(app);
export { database, set, ref, onValue };

export const signOutUser = async () => await signOut(auth);
