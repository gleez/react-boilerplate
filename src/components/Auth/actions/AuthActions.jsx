'use strict';

import AppDispatcher from '../../../dispatchers/AppDispatcher'
import WebAPI from '../../../utils/WebAPIUtils'
import AuthConstants from '../constants/AuthConstants'
import PayloadSources from '../../../constants/PayloadSources'

export default {
	login: (data) => {
    WebAPI.Post(AuthConstants.LOGIN_URL, AuthConstants.ActionTypes.LOGIN, data)
	},

	logout: () => {
		AppDispatcher.handleAction(PayloadSources.VIEW_ACTION, AuthConstants.ActionTypes.LOGOUT, null)
	}
}
