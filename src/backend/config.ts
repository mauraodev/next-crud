
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClA81TPgXAxGRNYuI5emp6pK-W_S5pVG8",
  authDomain: "next-crud-ad56d.firebaseapp.com",
  projectId: "next-crud-ad56d",
  storageBucket: "next-crud-ad56d.appspot.com",
  messagingSenderId: "709949026824",
  appId: "1:709949026824:web:bdd56ba3c7fad24ce897bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db
