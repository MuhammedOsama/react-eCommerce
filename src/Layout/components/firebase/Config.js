import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDVBOGNzIoVbP8k1lmKB9N0j1ZRnTHBbHg",
    authDomain: "ecommerce-262bb.firebaseapp.com",
    databaseURL: "https://ecommerce-262bb.firebaseio.com",
    projectId: "ecommerce-262bb",
    storageBucket: "ecommerce-262bb.appspot.com",
    messagingSenderId: "188590820867",
    appId: "1:188590820867:web:589ce7c7db215ea9db4836",
    measurementId: "G-WJK5ZY4KHM"
  };

  export default firebase.initializeApp(firebaseConfig);