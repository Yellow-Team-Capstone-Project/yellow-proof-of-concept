import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD1vMToUD8Mqh2e75udVVUQeat1pMkiWd4',
  authDomain: 'yellow-proof-of-concept.firebaseapp.com',
  databaseURL: 'https://yellow-proof-of-concept.firebaseio.com',
  projectId: 'yellow-proof-of-concept',
  storageBucket: 'yellow-proof-of-concept.appspot.com',
  messagingSenderId: '824038108224',
  appId: '1:824038108224:web:8294ca4c0460b1b77843a5',
  measurementId: 'G-DJGLCMY3KZ',
};

export const fire = firebase.initializeApp(config);

export const db = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
