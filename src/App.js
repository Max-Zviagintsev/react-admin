import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import {createFirestoreInstance} from 'redux-firestore';
import createReduxStore from './createReduxStore';
import firebase from 'firebase';
import 'firebase/firestore';

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";

import './App.css';
import AddClient from "./components/clients/AddClient";

// object containing Firebase config
const fbConfig = {
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
    useFirestoreForProfile: true
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

const store = createReduxStore();

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
};

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <Router>
                        <div className="App">
                            <Navbar/>
                            <Switch>
                                <Route exact path="/" component={Dashboard}/>
                                <Route exact path="/client/add" component={AddClient}/>
                            </Switch>
                        </div>
                    </Router>AddClient
                </ReactReduxFirebaseProvider>
            </Provider>
        );
    }
}

export default App;
