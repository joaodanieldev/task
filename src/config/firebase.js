import firebase from 'firebase';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyAidZkEE9yCV-gVZeTFNPzC6zMnZ11KY7M",
  authDomain: "task-9f5d3.firebaseapp.com",
  projectId: "task-9f5d3",
  storageBucket: "task-9f5d3.appspot.com",
  messagingSenderId: "214248966689",
  appId: "1:214248966689:web:ab4ccc0097227df1a93160"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore()

export default database;