import React from 'react';
import {Route, IndexRoute, IndexRedirect} from 'react-router';

import Main from './main';
import Home from './pages/home';
import NotFound from './pages/NotFound';

export default () => {
    return (
        <Route path="/">
            <IndexRedirect to="/en" />
            <Route path=":lang" component={Main}>
                <IndexRoute component={Home}/>
            </Route>
        </Route>
    )
};