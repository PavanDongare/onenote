import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const firebase = require('firebase');
require('firebase/firestore');


var firebaseConfig = {  // js is interpreted , this has to be before initialize. crazy.
  apiKey: "AIzaSyDAkemrbNPhDbHJiRBPg7L_Lviqlneo79s",
  authDomain: "one-note1.firebaseapp.com",
  databaseURL: "https://one-note1.firebaseio.com",
  projectId: "one-note1",
  storageBucket: "one-note1.appspot.com",
  messagingSenderId: "277085132827",
  appId: "1:277085132827:web:4590734d0890cbd23600be",
  measurementId: "G-E8JE9MJFX7"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
