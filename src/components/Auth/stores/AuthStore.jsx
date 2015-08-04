import BaseStore from '../../../stores/BaseStore'

let loginState = {
  data: '',
  loading: false,
  success: false,
  hasErrors: {}
}

class AuthStore extends BaseStore {
  constructor() {
    super()
    this.subscribe(() => this.registerToActions.bind(this))
  }

  registerToActions(payload) {
    let action = payload.action
    console.log(action)
  }

  getLoginState() {
		return loginState
	}

  reset() {
  }
}

export default new AuthStore()
