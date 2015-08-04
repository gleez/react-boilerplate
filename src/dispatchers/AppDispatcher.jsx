import { Dispatcher } from 'flux'

class AppDispatcher extends Dispatcher {
  handleAction(source, type, data) {
    if (arguments.length < 2 || arguments.length > 3) {
      let message = 'Expected two or three arguments.'
      throw new Error(message)
    }
    else if (arguments.length === 2) {
      data = type
      type = source
      source = undefined
    }

    let payload = {
      action: {
        type: type,
        data: data
      }
    }

    if (source) {
      payload.source = source
    }

    this.dispatch(payload)
  }
}

export default new AppDispatcher()
