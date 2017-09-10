import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../node_modules/font-awesome/css/font-awesome.min.css';

import App from './components/App';
import Login from './components/Login';
import NotFound from './components/NotFound';

const Root = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/image-contest/" component={App} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    )
}

render(<Root />, document.querySelector('#root'));