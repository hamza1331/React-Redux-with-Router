import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home'
import history from './History'
// import createBrowserHistory from 'history/createBrowserHistory'

// const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route path="/login" component={Login} />
                    <Route exact path="/" component={Home} />
                </div>
            </Router>
        )
    }
}

export default Routers;