import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDW2D-NokVGHRe9n3YuaJb-QqizCVz2thk",
  authDomain: "my-uno-b5066.firebaseapp.com",
  databaseURL: "https://my-uno-b5066.firebaseio.com",
  projectId: "my-uno-b5066",
  storageBucket: "my-uno-b5066.appspot.com",
  messagingSenderId: "920954902891",
  appId: "1:920954902891:web:8ed61410136d9b9b4c542e",
  measurementId: "G-97M7BZTK58"
};

firebase.initializeApp(firebaseConfig);

export default firebase;