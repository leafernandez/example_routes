import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home'
import Users from './components/Users'

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="container">
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/users">Users</Link></li>
                            </ul>
                        </nav>
                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route exact path="/users" component={Users}></Route>
                        </Switch>
                    </div>
                </Router>
                
            </div>
        );
    }
}

export default App;
