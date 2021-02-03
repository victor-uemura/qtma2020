import app from "firebase/app";
import firestore from "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAIDEQxJbKMW2khU0ttLVaZ04TrU6vqCaM",
  authDomain: "qtma2020.firebaseapp.com",
  databaseURL: "https://qtma2020.firebaseio.com",
  projectId: "qtma2020",
  storageBucket: "qtma2020.appspot.com",
  messagingSenderId: "107809599995",
  appId: "1:107809599995:web:827f00396f098e60ec9b5e",
  measurementId: "G-1TLTH2WVMK",
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.fieldValue = app.firestore.FieldValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;
    this.auth = app.auth();
    this.db = app.firestore();

    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.twitterProvider = new app.auth.TwitterAuthProvider();
  }

  emailSignUp = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  emailSignIn = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  resetPWD = (email) => this.auth.sendPasswordResetEmail(email);

  updatePWD = (password) => this.auth.currentUser.updatePassword(password);

  // Returns user document corresponding to email of current auth login
  getCurrentUser = async (authUser) => {
    const docRef = this.db
      .collection("users")
      .where("email", "==", authUser.email);
    try {
      const doc = await (await docRef.get()).docs[0];

      if (!doc.exists) {
        console.log("No such document!");
      } else {
        return doc.data();
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  };

  addUser = (name, email) => {
    this.db.settings({
      timestampsInSnapshots: true,
    });
    const userRef = this.db.collection("users").add({
      name,
      email,
      donations: {},
    });
  };

  addDonation = (donations, authUser) => {
    const userRef = this.db.collection("users").doc(authUser.uid);
    donations.forEach(function (donation) {
      userRef.update({
        donations: app.firestore.FieldValue.arrayUnion({
          time: new Date(),
          place: donation.place,
          amount: donation.amount,
          approved: false,
        }),
      });
    });
  };

  doSendEmailVerification = () => this.auth.currentUser.sendEmailVerification();

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

  doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);

  doSignInWithTwitter = () => this.auth.signInWithPopup(this.twitterProvider);

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .get()
          .then((snapshot) => {
            const dbUser = snapshot.data();

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });
  user = (uid) => this.db.doc(`users/${uid}`);

  users = () => this.db.collection("users");

  postings = () => this.db.collection("postings");
}

export default Firebase;
