import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDysvoohGIxUy8M4LFt01NjFPCrxlUH1j4",
    authDomain: "turboprojekt-eda1d.firebaseapp.com",
    databaseURL: "https://turboprojekt-eda1d.firebaseio.com",
    projectId: "turboprojekt-eda1d",
    storageBucket: "turboprojekt-eda1d.appspot.com",
    messagingSenderId: "636879069344"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

