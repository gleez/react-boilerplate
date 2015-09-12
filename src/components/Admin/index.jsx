module.exports = {
  path: 'admin',

  getComponent (location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Admin'))
    })
  }
}
