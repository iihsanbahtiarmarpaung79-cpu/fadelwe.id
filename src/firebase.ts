import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBj0QEgu090n5Vp7rLGPmDamMePoR9sE3A",
  authDomain: "fadelwb-6ced1.firebaseapp.com",
  projectId: "fadelwb-6ced1",
  storageBucket: "fadelwb-6ced1.firebasestorage.app",
  messagingSenderId: "979898361969",
  appId: "1:979898361969:web:aa582c1d520b67eab613d0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
