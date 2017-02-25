import React from 'react';
import {Route, IndexRoute, IndexRedirect} from 'react-router';

import Main from './main';
import Home from './pages/home';
import Family from './pages/family';
import Training from './pages/training';
import About from './pages/about';
import Terms from './pages/terms';
import FAQ from './pages/faq';
import NotFound from './pages/NotFound';

export default () => {
    return (
        <Route path="/">
            <IndexRedirect to="/en" />
            <Route path=":lang" component={Main}>
                <IndexRoute component={Home}/>
                <Route path="family" component={Family}/>
                <Route path="training" component={Training}/>
                <Route path="about" component={About}/>
                <Route path="terms" component={Terms}/>
                <Route path="faq" component={FAQ}/>
            </Route>
        </Route>
    )
};