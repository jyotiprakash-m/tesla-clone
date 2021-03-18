import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBVULg4WfzDAJcrDAJPo9juB_ec5nxrqkU",
    authDomain: "tesla-clone-5ac99.firebaseapp.com",
    projectId: "tesla-clone-5ac99",
    storageBucket: "tesla-clone-5ac99.appspot.com",
    messagingSenderId: "535698399794",
    appId: "1:535698399794:web:546b0679f67a07ea35d22b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }