import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2ANxWfXeOloPIrOpiGbH1wZGX1Dsscuw",
  authDomain: "ecommerce-134.firebaseapp.com",
  databaseURL: "https://ecommerce-134.firebaseio.com",
  projectId: "ecommerce-134",
  storageBucket: "ecommerce-134.appspot.com",
  messagingSenderId: "1050341937949",
  appId: "1:1050341937949:web:7a8c2979c6a5b5d57f47f4",
  measurementId: "G-99W3X0HDXG"
};

export default firebase.initializeApp(firebaseConfig);