import { EventEmitter } from 'events'
import AppDispatcher from '../dispatchers/AppDispatcher'

export default class BaseStore extends EventEmitter {

  constructor() {
    super()
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
}
