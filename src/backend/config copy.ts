// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';  

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_CxApZ6x2I3mU3zPBHPeziLfuo-aW4KM",
  authDomain: "next-crud-6d4ac.firebaseapp.com",
  projectId: "next-crud-6d4ac",
  storageBucket: "next-crud-6d4ac.appspot.com",
  messagingSenderId: "81882475688",
  appId: "1:81882475688:web:1e0c9002e1809970f1669d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db