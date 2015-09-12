const AuthRoute = {
  path: 'auth',

  getComponent (location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Login'))
    })
  }
}

const LoginRoute = {
  path: 'auth/login',

  getComponent (location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Login'))
    })
  }
}

const RegisterRoute = {
  path: 'auth/register',

  getComponent (location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Register'))
    })
  }
}

module.exports = {
  // path: 'auth',
  // indexRoute: LoginRoute,

  childRoutes: [
    AuthRoute,
    LoginRoute,
    RegisterRoute
  ]
}
