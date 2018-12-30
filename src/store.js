import {createStore, combineReducers, compose} from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import {reactReduxFirebase, firebaseReducer} from "react-redux-firebase";
import {reduxFirestore, firestoreReducer} from 'redux-firestore';
//Reducers
//@todo

const firebaseConfig = {
    apiKey: "AIzaSyDqz0Wghil7IakMRW83gLI9CvIOPx-AMX8",
    authDomain: "react-admin-1001.firebaseapp.com",
    databaseURL: "https://react-admin-1001.firebaseio.com",
    projectId: "react-admin-1001",
    storageBucket: "react-admin-1001.appspot.com",
    messagingSenderId: "586603226018"
};

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Init firestore
const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(
    rootReducer,
    initialState,
    compose(
        reactReduxFirebase(firebase),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;

