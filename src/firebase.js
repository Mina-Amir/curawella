import * as firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyALsrlOTYV7GBFpb8OzM_xq4yT7EG1gpBQ",
    authDomain: "curawella-2d9a5.firebaseapp.com",
    databaseURL: "https://curawella-2d9a5.firebaseio.com",
    projectId: "curawella-2d9a5",
    storageBucket: "curawella-2d9a5.appspot.com",
    messagingSenderId: "1058698528531",
    appId: "1:1058698528531:web:41172b2e866826d6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let database = firebaseConfig.database()
  console.log(database)

  export default firebaseConfig