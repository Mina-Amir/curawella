import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCn8bNxiHLAAPK1Zb8Yecjp3dqP7bOXxGc",
  authDomain: "curawella-5669a.firebaseapp.com",
  databaseURL: "https://curawella-5669a.firebaseio.com",
  projectId: "curawella-5669a",
  storageBucket: "curawella-5669a.appspot.com",
  messagingSenderId: "1019399022923",
  appId: "1:1019399022923:web:fd21f88a77d9ec91"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  // let databaseRef = firebase.database().ref('/Appointments/K0jTZLvEH8WKtvWz1TGJgMXWO7y1')
  // databaseRef.on('value', snapshot => {
  //   console.log(snapshot.val())
  // })
  // console.log(databaseRef)

  export default firebase