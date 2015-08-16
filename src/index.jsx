import React from 'react'
import ReactDOM from 'react-dom'
import { history }  from 'react-router/lib/BrowserHistory'
import { Router } from 'react-router'
import AsyncProps from 'react-router/lib/experimental/AsyncProps'

let rootRoute = {
  path: '/',
  component: require('./components/App'),
  //indexRoute: require('./components/Home'),

  childRoutes: [
    {path: '/about', component: require('./components/About')},
    {path: '/contact', component: require('./components/Contact')},
    require('./components/Auth'),
    require('./components/Admin'),
    require('./components/Profile'),
  ]
}

ReactDOM.render((
  <Router
    children={rootRoute}
    history={history}
    createElement={AsyncProps.createElement}
  />
), document.getElementById('root'))
