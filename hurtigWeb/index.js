import { initializeApp} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getFirestore,collection, doc, setDoc,getDocs } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"; 
import {getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0SDsFjXyCIUGkgvlOXgXBjC-4u-LEF2g",
  authDomain: "hurtig-58899.firebaseapp.com",
  databaseURL: "https://hurtig-58899-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hurtig-58899",
  storageBucket: "hurtig-58899.appspot.com",
  messagingSenderId: "965342113328",
  appId: "1:965342113328:web:d20f2d1f3f7acee99c07f5",
  measurementId: "G-7QBSDQ717C"
};
// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const googleAuthProvider = new GoogleAuthProvider();
  const auth = getAuth();