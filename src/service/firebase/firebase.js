import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCtBR-y-I1wgAK68ZtBuAZjBckO13soWGg",
  authDomain: "yukkitajajan-88bb7.firebaseapp.com",
  databaseURL: "https://yukkitajajan-88bb7.firebaseio.com",
  projectId: "yukkitajajan-88bb7",
  storageBucket: "yukkitajajan-88bb7.appspot.com",
  messagingSenderId: "1040970463496",
  appId: "1:1040970463496:web:c36003ee8ebc25f3ef14bd",
  measurementId: "G-L5G1LG37H3"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};