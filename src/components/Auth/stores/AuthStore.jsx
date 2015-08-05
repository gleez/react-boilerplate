import BaseStore from '../../../stores/BaseStore'
import AuthConstants from '../constants/AuthConstants'
import PayloadSources from '../../../constants/PayloadSources'

let ActionTypes = AuthConstants.ActionTypes

class AuthStore extends BaseStore {
  constructor() {
    super()
    this.subscribe(() => this.registerToActions.bind(this))
    this.loginState = this.getDefaultState
  }

  registerToActions(payload) {
    if(PayloadSources.SERVER_ACTION === payload.source) {
      this.handleServerActions(payload)
    }

    if(PayloadSources.VIEW_ACTION === payload.source) {
      this.handleViewActions(payload)
    }
  }

  handleServerActions(payload) {
    let action = payload.action
    switch(action.type) {
      case ActionTypes.LOGIN:
        this.loginState = this.ParseResponse(null, action.data)
        this.loginState.loading = false
        //this.loginState.hasErrors = {email: 'This is invalid', password: 'This is invalid'}
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

  reset() {
    return this.getDefaultState
  }
}

export default new AuthStore()
