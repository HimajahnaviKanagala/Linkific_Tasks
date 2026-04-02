import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9BZWqcS6J0i9dVBJlM0X4hgnhTo8R1yc",
  authDomain: "react-app-b3ac1.firebaseapp.com",
  projectId: "react-app-b3ac1",
  storageBucket: "react-app-b3ac1.firebasestorage.app",
  messagingSenderId: "4241290273",
  appId: "1:4241290273:web:aeaada18b366a1b7de9f60",
  measurementId: "G-N5GCBPR6FB",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
