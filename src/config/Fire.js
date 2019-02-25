 import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    
    apiKey: "AIzaSyAguG4qRQu6Ixfyy2k9dRMKhXw4srXMwBw",
    authDomain: "asdf-80aa9.firebaseapp.com",
    databaseURL: "https://asdf-80aa9.firebaseio.com",
    projectId: "asdf-80aa9",
    storageBucket: "asdf-80aa9.appspot.com",
    messagingSenderId: "538673791417"
  };
  const fire = firebase.initializeApp(config);
export default fire;