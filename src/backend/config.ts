import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeVnxgjvkUoGS3kKTjFdx8lTQ25FVt80U",
  authDomain: "next-crud-19e73.firebaseapp.com",
  projectId: "next-crud-19e73",
  storageBucket: "next-crud-19e73.appspot.com",
  messagingSenderId: "122298294536",
  appId: "1:122298294536:web:3b5336fd9e618438904cbd"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase)


export default db