import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../node_modules/font-awesome/css/font-awesome.min.css';

import App from './components/App';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import PastWinner from './components/PastWinner';
import Submit from './components/Submit';

const Root = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/image-contest/signup" component={Signup} />
                    <Route exact path="/image-contest/vote" component={App} />
                    <Route exact path="/image-contest/past-winner" component={PastWinner} />
                    <Route exact path="/image-contest/submit" component={Submit} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    )
}

render(<Root />, document.querySelector('#root'));