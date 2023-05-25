import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBKb7ARQncTxNsPSkuHpp01iR2QUGY73zE",
  authDomain: "firechat-3142e.firebaseapp.com",
  projectId: "firechat-3142e",
  storageBucket: "firechat-3142e.appspot.com",
  messagingSenderId: "281203347345",
  appId: "1:281203347345:web:33c15e041faad87d181430",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()