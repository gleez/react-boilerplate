'use strict';

import AppDispatcher from '../../../dispatchers/AppDispatcher'
import WebAPI from '../../../utils/WebAPIUtils'
import AuthConstants from '../constants/AuthConstants'

export default {
	login: (data) => {
    WebAPI.Post(AuthConstants.LOGIN_URL, AuthConstants.ActionTypes.LOGIN, data)
	}
}
