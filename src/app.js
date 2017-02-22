import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, applyRouterMiddleware} from 'react-router';

import routes from './routes';
const _routes = routes();

import './scss/style.scss';

const App = () => {
    return (
        <Router history={browserHistory}>
            {_routes}
        </Router>
    )
};

ReactDOM.render(<App />, document.getElementById('app'));
