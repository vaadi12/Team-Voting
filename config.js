import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCKrxYROUhcFSbhXyjldyAy6YDEZJei1vg",
    authDomain: "project-c67-c9c1e.firebaseapp.com",
    databaseURL: "https://project-c67-c9c1e-default-rtdb.firebaseio.com",
    projectId: "project-c67-c9c1e",
    storageBucket: "project-c67-c9c1e.appspot.com",
    messagingSenderId: "162082374512",
    appId: "1:162082374512:web:a9469cd930324dba2a05b5"
 
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();