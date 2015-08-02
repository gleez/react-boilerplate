import BaseStore from '../../stores/BaseStore'

let defaultLoginState = {
  loading: false,
  success: false,
  error: undefined,
  hasError: {},
  help: {}
}

class AuthStore extends BaseStore {

  constructor() {
    super()
  }

  getLoginState() {
		return defaultLoginState
	}

  reset() {
  }
}

export default new AuthStore()
