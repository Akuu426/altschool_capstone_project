// firebase.ts

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdZuy2vbHhv9-C-RhnL7UfpIFTBCpQ6QA",
  authDomain: "linkly-801ed.firebaseapp.com",
  projectId: "linkly-801ed",
  storageBucket: "linkly-801ed.appspot.com",
  messagingSenderId: "68553139",
  appId: "1:68553139:web:4affd81d37891b1e9e23c6",
  measurementId: "G-8T3JDZXNKS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
