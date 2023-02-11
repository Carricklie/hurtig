import { initializeApp} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getFirestore,collection, doc, setDoc,getDocs } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"; 
import {getAuth, signInWithPopup, GoogleAuthProvider ,signOut } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

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
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const provider = new GoogleAuthProvider();
  export const auth = getAuth();
  export async function loginGoogle(){
    return await signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          return {
            "note": "Success",
            "user": user,
            "message": null
          };
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
          return {
            "note": "Fail",
            "user": null,
            "message": errorMessage
          };
        });
  }
  export async function logout(){
    return await signOut(auth).then(() => {
      return {
        "note": "Success",
        "message": null
      };
    }).catch((error) => {
      return {
        "note": "Failed",
        "message": error.message
      };
    });
  }
 