// firebase.ts

import { initializeApp } from "firebase/app";
// import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdZuy2vbHhv9-C-RhnL7UfpIFTBCpQ6QA",
  authDomain: "linkly-801ed.firebaseapp.com",
  projectId: "linkly-801ed",
  storageBucket: "linkly-801ed.appspot.com",
  messagingSenderId: "68553139",
  appId: "1:68553139:web:4affd81d37891b1e9e23c6",
  measurementId: "G-8T3JDZXNKS",
};

const app = initializeApp(firebaseConfig);
// isSupported().then((supported) => {
//   if (supported) {
//     const analytics = getAnalytics(app);
//     console.log("Analytics initialized successfully");
//   } else {
//     console.log("Analytics not supported in this environment");
//   }
// }).catch((error) => {
//   console.error("Error checking analytics support:", error);
// });

export const auth = getAuth(app);
const db = getFirestore(app);

export { db };
