import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDtEZds8155eVZvXHbl7aFzBC30LjKsbEc",
  authDomain: "tusaldovareact.firebaseapp.com",
  projectId: "tusaldovareact",
  storageBucket: "tusaldovareact.appspot.com",
  messagingSenderId: "1015517732686",
  appId: "1:1015517732686:web:d9918236d4cb954754c81f",
  measurementId: "G-D951SQ52JC",
});
export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}

export const serverStamp = firebase.firestore.Timestamp;
