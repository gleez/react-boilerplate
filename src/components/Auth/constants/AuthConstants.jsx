var FluxConstant = require('flux-constant')

var BASE_URL = 'https://notify.gleez.org'

export default {
  BASE_URL: BASE_URL,
  LOGIN_URL: BASE_URL + '/auth/login',
  SIGNUP_URL: BASE_URL + '/auth/register',
  ActionTypes: FluxConstant.set([
    'FORGOT',
    'LOGIN',
    'LOGOUT',
    'RESET',
    'SIGNUP',
  ])
}
