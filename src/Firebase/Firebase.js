import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "******",
    authDomain: "******",
    databaseURL: "******",
    projectId: "******",
    storageBucket: "******",
    messagingSenderId: "******",
    appId: "******",
  };

  firebase.initializeApp(firebaseConfig);

  export const databaseRef = firebase.database().ref();
  export const database = firebase.database()

 


  

