import firebase from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCIEFmWauHTxVk2SOMCISZya3c8tJDv4UE",
    authDomain: "examenu5.firebaseapp.com",
    projectId: "examenu5",
    storageBucket: "examenu5.appspot.com",
    messagingSenderId: "281947302617",
    appId: "1:281947302617:web:872ef954af9e60a7482cc8"
};


export const firebaseapp = firebase.initializeApp(firebaseConfig);