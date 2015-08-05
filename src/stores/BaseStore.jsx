import { EventEmitter } from 'events'
import AppDispatcher from '../dispatchers/AppDispatcher'

export default class BaseStore extends EventEmitter {
  constructor() {
    super()
  }

  subscribe(actionSubscribe) {
    this._dispatchToken = AppDispatcher.register(actionSubscribe())
  }

  get dispatchToken() {
    return this._dispatchToken
  }

  emitChange() {
    this.emit('CHANGE')
  }

  addChangeListener(cb) {
    this.on('CHANGE', cb)
  }

  removeChangeListener(cb) {
    this.removeListener('CHANGE', cb)
  }

  get getDefaultState() {
    return { loading: false, success: false, data: '', error: undefined, hasErrors: {} }
  }

  ParseResponse(validation, data) {
    let response = this.getDefaultState
    let {err, res, timeout} = data

    if (err && err.timeout === timeout) {
      response.error = "Request Timed out"
    }
    else if (err && err.crossDomain) {
      response.error = "cross Domain Error"
    }
    else if (err && !res) {
      response.error = err.message
    }
    else if (res && !res.ok) {
      response.error = res.text
    }
    else if (validation && validation.keys) {
      let forField = validation.keys.pop()
      let regexBecause = /because \[(.*?)\]/
      let message = res.response

      if (regexBecause.test(message)) {
        message = regexBecause.exec(message)[1]
      }

      response.hasError[forField] = message
    }
    else if (res) {
      response.success = true
      response.data = res.text
    }

    return response
  }
}
