import firebase from "firebase";
//require("@firebase/firestore");


  const firebaseConfig = {
    apiKey: "AIzaSyCplox-1dB8AO2-RULmz2_2ENRtDE6lP7c",
    authDomain: "eride-cc106.firebaseapp.com",
    projectId: "eride-cc106",
    storageBucket: "eride-cc106.appspot.com",
    messagingSenderId: "1095149619823",
    appId: "1:1095149619823:web:a448546c0e7b2b1771db9a"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
