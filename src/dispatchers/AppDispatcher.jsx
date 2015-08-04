import { Dispatcher } from 'flux'
import PayloadSources from '../constants/PayloadSources'

class AppDispatcher extends Dispatcher {
  handleViewAction(action) {
    this.dispatch({
      source: PayloadSources.VIEW_ACTION,
      action: action
    })
  }

  handleServerAction(action) {
    this.dispatch({
      source: PayloadSources.SERVER_ACTION,
      action: action
    })
  }

  handleAction(source, action) {
    this.dispatch({
      source: source,
      action: action
    })
  }
}

export default new AppDispatcher()
