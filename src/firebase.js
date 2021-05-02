import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAgvEFiTkC4XXvqiaAHOLI7e3PqJOSZgME",
	authDomain: "my-slack-clone-a4d05.firebaseapp.com",
	projectId: "my-slack-clone-a4d05",
	storageBucket: "my-slack-clone-a4d05.appspot.com",
	messagingSenderId: "124952903663",
	appId: "1:124952903663:web:26f14f4eb2fd5c27de401a",
	measurementId: "G-6DT6X4GX17",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
