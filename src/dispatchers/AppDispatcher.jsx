import { Dispatcher } from 'flux'

export default class AppDispatcher extends Dispatcher {
  handleViewAction(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }

  handleServerAction(action) {
    this.dispatch({
      source: 'SERVER_ACTION',
      action: action
    })
  }
}

// let _AppDispatcher = new AppDispatcher()
//
// export default _AppDispatcher
