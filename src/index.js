import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyDIh8WWVvIHAIb-2paO5-JLbMhJSDXkejU",
    authDomain: "chat-react-e8263.firebaseapp.com",
    projectId: "chat-react-e8263",
    storageBucket: "chat-react-e8263.appspot.com",
    messagingSenderId: "320319850215",
    appId: "1:320319850215:web:e82759083c5028ea87c442",
    measurementId: "G-D1TEZTVN9Q"
    }
);

export const Context = createContext(null)
const auth = firebase.auth()
const firestore = firebase.firestore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
);

