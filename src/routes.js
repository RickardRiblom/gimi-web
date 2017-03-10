import React from 'react'
import {Route, IndexRoute, IndexRedirect} from 'react-router'

import Main from './main'
import Home from './pages/home'
import Family from './pages/family'
import Training from './pages/training'
import About from './pages/about'
import Terms from './pages/terms'
import FAQ from './pages/faq'
import News from './pages/news'
import NotFound from './pages/NotFound'

export default () => {
  if (location.href.includes('veckopengen')) {
    return (
      <Route path='/' component={Main} lang='se'>
        <IndexRoute component={Home} />
        <Route path='upplev-veckopengen' component={Family} />
        <Route path='traning' component={Training} />
        <Route path='aktuellt' component={News} />
        <Route path='om-oss' component={About} />
        <Route path='terms' component={Terms} />
        <Route path='faq' component={FAQ} />
        <Route path='*' component={NotFound} />
      </Route>
    )
  } else if (location.href.includes('ukepengen')) {
    return (
      <Route path='/' component={Main} lang='no'>
        <IndexRoute component={Home} />
        <Route path='opplev' component={Family} />
        <Route path='trening' component={Training} />
        <Route path='aktuellt' component={News} />
        <Route path='om-oss' component={About} />
        <Route path='terms' component={Terms} />
        <Route path='faq' component={FAQ} />
        <Route path='*' component={NotFound} />
      </Route>
    )
  } else {
    return (
      <Route path='/' component={Main} lang='en'>
        <IndexRoute component={Home} />
        <Route path='family-community' component={Family} />
        <Route path='coaching' component={Training} />
        <Route path='news' component={News} />
        <Route path='about-us' component={About} />
        <Route path='terms' component={Terms} />
        <Route path='faq' component={FAQ} />
        <Route path='*' component={NotFound} />
      </Route>
    )
  }
}
