// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsA9sbrbcNm77rRWjzkdRJLMFNJLpOxRE",
  authDomain: "e-comm-mern.firebaseapp.com",
  projectId: "e-comm-mern",
  storageBucket: "e-comm-mern.appspot.com",
  messagingSenderId: "72129481369",
  appId: "1:72129481369:web:752277021a59257cd7c608",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
