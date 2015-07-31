const AuthRoute = {
  path: 'auth',

  getComponents (cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Login'))
    })
  }
}

const LoginRoute = {
  path: 'auth/login',

  getComponents (cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Login'))
    })
  }
}

const RegisterRoute = {
  path: 'auth/register',

  getComponents (cb) {
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
