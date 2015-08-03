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
  }

  getLoginState() {
		return loginState
	}

  reset() {
  }
}

export default new AuthStore()
