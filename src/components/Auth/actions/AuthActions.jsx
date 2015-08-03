'use strict';

import AppDispatcher from '../../../dispatchers/AppDispatcher'
import AuthConstants from '../constants/AuthConstants'

export default {
	login: (data) => {
		AppDispatcher.handleViewAction({
			type: AuthConstants.LOGIN_USER,
			data: data
		})
	}
}
