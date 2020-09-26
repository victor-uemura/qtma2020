import app from 'firebase/app';
import firebase from 'firebase';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAIDEQxJbKMW2khU0ttLVaZ04TrU6vqCaM',
	authDomain: 'qtma2020.firebaseapp.com',
	databaseURL: 'https://qtma2020.firebaseio.com',
	projectId: 'qtma2020',
	storageBucket: 'qtma2020.appspot.com',
	messagingSenderId: '107809599995',
	appId: '1:107809599995:web:827f00396f098e60ec9b5e',
	measurementId: 'G-1TLTH2WVMK'
};

class Firebase {
	constructor() {
		app.initializeApp(config);

		this.auth = app.auth();
	}

	emailSignUp = (email, password) =>
		this.auth.createUserWithEmailAndPassword(email, password);

	emailSignIn = (email, password) =>
		this.auth.signInWithEmailAndPassword(email, password);

	signOut = () => this.auth.signOut();

	resetPWD = (email) => this.auth.sendPasswordResetEmail(email);

	updatePWD = (password) => this.auth.currentUser.updatePassword(password);

	addUser = (
		firstName,
		lastName,
		email,
		birthDate,
		location,
		education,
		password
	) => {
		const db = firebase.firestore();
		db.settings({
			timestampsInSnapshots: true
		});
		const userRef = db.collection('users').add({
			firstName,
			lastName,
			email,
			birthDate,
			location,
			education,
			password
		});
	};
}

export default Firebase;
