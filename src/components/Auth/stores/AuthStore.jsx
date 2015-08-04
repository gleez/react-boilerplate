import BaseStore from '../../../stores/BaseStore'
import AuthConstants from '../constants/AuthConstants'
import PayloadSources from '../../../constants/PayloadSources'
import ParseResponse from '../../../utils/ParseResponse'

let ActionTypes = AuthConstants.ActionTypes
let data = {
  data: '',
  error: undefined,
  loading: false,
  success: false,
  hasErrors: {},
  help: {}
}

class AuthStore extends BaseStore {
  constructor() {
    super()
    this.subscribe(() => this.registerToActions.bind(this))
    this.state = data
  }

  registerToActions(payload) {
    let action = payload.action

    if(PayloadSources.SERVER_ACTION === payload.source) {
      switch(action.type) {
      	case ActionTypes.LOGIN:
          this.state = ParseResponse(null, action.data)
          this.state.loading = false
          //this.state.hasErrors = {email: 'This is invalid', password: 'This is invalid'}
      	  this.emitChange()
      		break
      	default:
      		break
      }
    }

    if(PayloadSources.VIEW_ACTION === payload.source) {
      switch(action.type) {
        case ActionTypes.LOGIN:
          this.state.loading = true
          this.emitChange()
          break
        default:
          break
      }
    }
  }

  getLoginState() {
		return this.state
	}

  reset() {
    return data
  }
}

export default new AuthStore()
