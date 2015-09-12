import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/lib/createBrowserHistory'
import { Router } from 'react-router'

let rootRoute = {
  component: 'div',
  //indexRoute: require('./components/Home'),
  childRoutes: [{
    path: '/',
    component: require('./components/App'),
    childRoutes: [
      {path: '/about', component: require('./components/About')},
      {path: '/contact', component: require('./components/Contact')},
      require('./components/Auth'),
      require('./components/Admin'),
      require('./components/Profile'),
    ]}
  ]
}

ReactDOM.render((
  <Router history={createHistory('/')} routes={rootRoute} />
), document.getElementById('root'))
