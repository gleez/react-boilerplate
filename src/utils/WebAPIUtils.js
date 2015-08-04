import AppDispatcher from '../dispatchers/AppDispatcher'
import RequestConstants from '../constants/RequestConstants'
import PayloadSources from '../constants/PayloadSources'
import Request from 'superagent'

class WebAPIUtils {
  constructor() {
    this.pendingRequests = {},
    this.timeout = 10000
  }

  Fetch(url, key){
    this.abortPendingRequests(key)
    this.dispatch(PayloadSources.VIEW_ACTION, key, RequestConstants.PENDING, params)
    this.pendingRequests[key] = this.get(url).end(
      this.makeDigestFun(key, params).bind(this)
    )
  }

  Post(url, key, data){
    //console.log(url, key, data)
    this.abortPendingRequests(key)
    this.dispatch(PayloadSources.VIEW_ACTION, key, RequestConstants.PENDING)
    this.pendingRequests[key] = this.post(url, data).end(
      this.makeDigestFun(key).bind(this)
    )
  }

  Delete(url, key, data){
    //console.log(url, key, data)
    this.abortPendingRequests(key)
    this.dispatch(PayloadSources.VIEW_ACTION, key, RequestConstants.PENDING)
    this.pendingRequests[key] = this.del(url, data).end(
      this.makeDigestFun(key).bind(this)
    )
  }

  dispatch(source, key, response, params) {
    let payload = {type: key, data: response}
    if (params) {
      payload.queryParams = params
    }

    AppDispatcher.handleAction(source, payload)
  }

  // return successful response, else return request Constants
  makeDigestFun(key, params) {
    return function (err, res) {
      if (err && err.timeout === this.timeout) {
        this.dispatch(PayloadSources.SERVER_ACTION, key, RequestConstants.TIMEOUT, params)
      } else if (err && err.crossDomain) {
        this.dispatch(PayloadSources.SERVER_ACTION, key, RequestConstants.CORSERROR, params)
      } else if (err) {
        this.dispatch(PayloadSources.SERVER_ACTION, key, RequestConstants.REQERROR, params)
      } else if (res && res.status === 400) {
        //UserActions.logout()
      } else if (res && !res.ok) {
        this.dispatch(PayloadSources.SERVER_ACTION, key, RequestConstants.ERROR, params)
      } else if (res){
        this.dispatch(PayloadSources.SERVER_ACTION, key, res, params)
      }
    }
  }

  abortPendingRequests(key) {
    if (this.pendingRequests[key]) {
      this.pendingRequests[key]._callback = function(){}
      this.pendingRequests[key].abort()
      this.pendingRequests[key] = null
    }
  }

  // a post request without an authtoken param
  post(url, data) {
    return Request
      .post(url)
      .set('Accept', 'application/json')
      .send(data)
      .timeout(this.timeout)
      //.query({authtoken: token()})
  }

  // a get request without an authtoken param
  get(url) {
    return Request
      .get(url)
      .set('Accept', 'application/json')
      .timeout(this.timeout)
      //.query({authtoken: token()})
  }
}

export default new WebAPIUtils()
