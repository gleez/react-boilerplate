var FluxConstant = require('flux-constant')
//var PayloadSources = require('../../../constants/PayloadSources')

var BASE_URL = 'https://notify.gleez.org'

export default {
  BASE_URL: BASE_URL,
  LOGIN_URL: BASE_URL + '/auth/login',
  SIGNUP_URL: BASE_URL + '/auth/register',
  //PayloadSources: PayloadSources,
  ActionTypes: FluxConstant.set([
    'FORGOT',
    'FORGOT_RESPONSE',
    'LOGIN',
    'LOGIN_RESPONSE',
    'LOGOUT',
    'LOGOUT_RESPONSE',
    'RESET',
    'RESET_RESPONSE',
    'SIGNUP',
    'SIGNUP_RESPONSE',
  ])
}
