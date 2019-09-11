import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyC7wW6udeh1Y1v0l_D83VxeS9Sb3_pa7rA",
    authDomain: "todolist-clone-212b4.firebaseapp.com",
    databaseURL: "https://todolist-clone-212b4.firebaseio.com",
    projectId: "todolist-clone-212b4",
    storageBucket: "todolist-clone-212b4.appspot.com",
    messagingSenderId: "970881852797",
    appId: "1:970881852797:web:a928bb658cfc1339999814"

});

export { firebaseConfig as firebase };

//V3NmYV3NmYrGjEorGjEo