

import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyBiR1wNbhrx7wkzXqY6BUyRyiTQuOIezz8",
  authDomain: "wirelessbuzzerapp-22441.firebaseapp.com",
  databaseURL: "https://wirelessbuzzerapp-22441-default-rtdb.firebaseio.com",
  projectId: "wirelessbuzzerapp-22441",
  storageBucket: "wirelessbuzzerapp-22441.appspot.com",
  messagingSenderId: "862604472243",
  appId: "1:862604472243:web:add0dc9e081d6136e0a5c6"
};

// Initialize Firebase
let app = firebase. initializeApp(firebaseConfig);
export default app.database()