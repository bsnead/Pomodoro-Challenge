import firebase from 'firebase'

var config = {
   apiKey: "AIzaSyDuBt_GnlA82hgYuPt57hZ6pJneqbrJ7Tg",
   authDomain: "pomodoro-challenge.firebaseapp.com",
   databaseURL: "https://pomodoro-challenge.firebaseio.com",
   projectId: "pomodoro-challenge",
   storageBucket: "pomodoro-challenge.appspot.com",
   messagingSenderId: "229770220308"
 };
 firebase.initializeApp(config);

 export default firebase;
