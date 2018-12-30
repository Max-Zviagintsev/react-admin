import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";

import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <Router>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                    </Switch>
                </div>
            </Router>
            </Provider>
        );
    }
}

export default App;
