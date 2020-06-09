import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDtvsI7BnGukE_wUThiiVTQHRB3WH1YGX0",
  authDomain: "pejuang-mahasiswa.firebaseapp.com",
  databaseURL: "https://pejuang-mahasiswa.firebaseio.com",
  projectId: "pejuang-mahasiswa",
  storageBucket: "pejuang-mahasiswa.appspot.com",
  messagingSenderId: "1024899497258",
  appId: "1:1024899497258:web:d855c4fece1e43fcef3253",
  measurementId: "G-PSZH4D4PGP",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export default firebase;
