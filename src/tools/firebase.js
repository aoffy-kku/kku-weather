import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyADlTbPd1MU5iGVful0yKHltq3v-Tm6EEQ",
  authDomain: "example-158c1.firebaseapp.com",
  databaseURL: "https://example-158c1.firebaseio.com",
  projectId: "example-158c1",
  storageBucket: "example-158c1.appspot.com",
  messagingSenderId: "325793654113"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
