import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//Setting up database

//Config here
const firebaseConfig = {
  apiKey: "AIzaSyCOAjNVWNdItA2ZuEpHhmOcchRrAsrqp88",
  authDomain: "netflix-clone-130ca.firebaseapp.com",
  databaseURL: "https://netflix-clone-130ca.firebaseio.com",
  projectId: "netflix-clone-130ca",
  storageBucket: "netflix-clone-130ca.appspot.com",
  messagingSenderId: "885370039608",
  appId: "1:885370039608:web:83b0e388997819384325cd",
};
const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
