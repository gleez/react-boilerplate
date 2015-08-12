import BaseStore from '../../../stores/BaseStore'
import {ActionTypes} from '../constants/AuthConstants'
import jwt_decode from 'jwt-decode'

class AuthStore extends BaseStore {
  constructor() {
    super()
    this.subscribe(() => this.registerToActions.bind(this))
    this.loginState = this.getDefaultState
    this.signupState = this.getDefaultState
    this._user = null
    this._accessToken = localStorage.getItem('accessToken')
    if(this._accessToken){
      this._user = jwt_decode(this._accessToken)
    }
  }

  handleServerActions(payload) {
    let action = payload.action
    switch(action.type) {
      case ActionTypes.LOGIN:
        this.loginState = this.ParseResponse(null, action.data)
        this.loginState.loading = false

        // Login Successful
        if(this.loginState.success == true && this.loginState.json){
          this._accessToken = this.loginState.json.token
          this._user = jwt_decode(this._accessToken)

          // Save token to local storage
          localStorage.setItem('accessToken', this._accessToken)
        }

        this.emitChange()
        break
      default:
        break
    }
  }

  handleViewActions(payload) {
    let action = payload.action
    switch(action.type) {
      case ActionTypes.LOGIN:
        this.loginState = this.getDefaultState
        this.loginState.loading = true
        this.emitChange()
        break
      case ActionTypes.LOGOUT:
        // Remove token from Local Storage
        localStorage.removeItem('accessToken')
        this._accessToken = null
        this._user = null
        this.emitChange()
        break
      default:
        break
    }
  }

  getLoginState() {
		return this.loginState
	}

  loginReset() {
    this.loginState = this.getDefaultState
  }

  getSignupState() {
		return this.signupState
	}

  signupReset() {
    this.signupState = this.getDefaultState
  }

  get user() {
    return this._user
  }

  get jwt() {
    return this._accessToken
  }

  isLoggedIn() {
    if(this._user) {
      return Math.round(new Date().getTime() / 1000) <= this._user.exp
    }

    return false
  }
}

export default new AuthStore()
