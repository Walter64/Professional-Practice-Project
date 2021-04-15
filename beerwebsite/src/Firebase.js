import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

let config = {
    apiKey: "XXXXXXX",
    authDomain: "XXXXX",
    databaseURL: "XXXXX",
    projectId: "XXXXX",
    storageBucket: "XXXX",
    messagingSenderId: "XXXX"
};
firebase.initializeApp(config);


export default firebase;