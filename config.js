import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBzKHARxX-04k4z5hFUM-86qvKEFV9vIp0",
  authDomain: "bed-time-stories-7e728.firebaseapp.com",
  projectId: "bed-time-stories-7e728",
  storageBucket: "bed-time-stories-7e728.appspot.com",
  messagingSenderId: "3277741500",
  appId: "1:3277741500:web:9268a1d841d8c0af4cdfb9"
};

firebase.initializeApp(firebaseConfig);

export default  firebase.firestore() 