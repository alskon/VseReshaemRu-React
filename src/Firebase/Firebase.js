import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCepgU3di1G51IevEL51WFhz6luGEs7ens",
    authDomain: "vsereshaem-8493b.firebaseapp.com",
    databaseURL: "https://vsereshaem-8493b.firebaseio.com",
    projectId: "vsereshaem-8493b",
    storageBucket: "vsereshaem-8493b.appspot.com",
    messagingSenderId: "858006205103",
    appId: "1:858006205103:web:81a108fed04e5ca6475a5a"
  };

  firebase.initializeApp(firebaseConfig);

  export const databaseRef = firebase.database().ref();
  export const database = firebase.database()

 


  

