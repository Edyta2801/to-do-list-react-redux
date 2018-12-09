
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyAvGPg_0ivhf98-HztJQtAJy3FVaUN_u2w",
    authDomain: "todo-list-a6e8e.firebaseapp.com",
    databaseURL: "https://todo-list-a6e8e.firebaseio.com",
    projectId: "todo-list-a6e8e",
    storageBucket: "todo-list-a6e8e.appspot.com",
    messagingSenderId: "16464590013"
  };
  firebase.initializeApp(config)

export const auth = firebase.auth()
export const database = firebase.database()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
