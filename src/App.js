import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
