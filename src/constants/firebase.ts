import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAQXEYM0_JV0OEYkQ-FOb8Etrs4ZvsoQWI",
  authDomain: "testtsproject-a23c1.firebaseapp.com",
  projectId: "testtsproject-a23c1",
  storageBucket: "testtsproject-a23c1.appspot.com",
  messagingSenderId: "484891600995",
  appId: "1:484891600995:web:ca344f20179a578cefb056"
  };

//firebase.initializeApp(firebaseConfig);
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }else {
//   firebase.app(); // if already initialized, use that one
// }

export let app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()