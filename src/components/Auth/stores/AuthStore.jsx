import BaseStore from '../../../stores/BaseStore'
import {ActionTypes} from '../constants/AuthConstants'

class AuthStore extends BaseStore {
  constructor() {
    super()
    this.subscribe(() => this.registerToActions.bind(this))
    this.loginState = this.getDefaultState
  }

  handleServerActions(payload) {
    let action = payload.action
    switch(action.type) {
      case ActionTypes.LOGIN:
        this.loginState = this.ParseResponse(null, action.data)
        this.loginState.loading = false
        if(this.loginState.error != undefined && this.hasErrors == null) {
          this.loginState.hasErrors = {email: '', password: ''}
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

  set enableLoginButton(enable) {
    this.loginState.canSubmit = true
  }

  set disableLoginButton(disable) {
    this.loginState.canSubmit = false
  }
}

export default new AuthStore()
