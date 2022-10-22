// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATXNknQIt8UEpUKxu3DD8fuIDQN8NAuRo",
  authDomain: "medium-post-288ef.firebaseapp.com",
  projectId: "medium-post-288ef",
  storageBucket: "medium-post-288ef.appspot.com",
  messagingSenderId: "97806059360",
  appId: "1:97806059360:web:14411fe940d7cf2d39c005"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

const db = getFirestore(app)

export { auth, provider, db }