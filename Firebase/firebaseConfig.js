import Firebase from 'react-native-firebase';

let config = {
    apiKey: "AIzaSyDluScZuSfoXLtC4WVC1EDjBP0rARRHtlM",
    authDomain: "akillireklam-a7407.firebaseapp.com",
    databaseURL: "https://akillireklam-a7407.firebaseio.com",
    projectId: "akillireklam-a7407",
    storageBucket: "akillireklam-a7407.appspot.com",
    messagingSenderId: "581084413296",
    appId: "1:581084413296:web:693121e87e8e43f3"
  };

  let app = Firebase.initializeApp(config);

export const db = app.database();