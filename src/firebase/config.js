import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsJKygfK5XVili8SmyFVHFLbe__VVTE64",
  authDomain: "dms-final.firebaseapp.com",
  databaseURL: "https://dms-final.firebaseio.com",
  projectId: "dms-final",
  storageBucket: "dms-final.appspot.com",
  messagingSenderId: "372822702538",
  appId: "1:372822702538:android:02bf54b732743015ba7733",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
