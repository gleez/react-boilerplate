module.exports = {
  path: 'admin',

  getComponents (cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Admin'))
    })
  }
}
