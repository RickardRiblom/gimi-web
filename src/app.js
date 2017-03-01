import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, applyRouterMiddleware} from 'react-router';

import routes from './routes';
const _routes = routes();

import './scss/style.scss';

window.footerCounterValue = 173672608;
window.counterValue = 74931501;

function scrollTop() {
    window.scrollTo(0, 0);
}

const App = () => {
    return (
        <Router history={browserHistory} onUpdate={scrollTop}>
            {_routes}
        </Router>
    )
};

ReactDOM.render(<App />, document.getElementById('app'));
