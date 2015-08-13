import React from 'react';
import AuthStore from './Auth/stores/AuthStore'

export default (ComposedComponent) => {
  return class AuthenticatedComponent extends React.Component {

    static willTransitionTo(transition) {
      if (!AuthStore.isLoggedIn()) {
        transition.redirect('/auth/login', {}, {'nextPath' : transition.path})
      }
    }

    constructor() {
      super()
      this.state = this._getLoginState()

      // In ES6, no autobinding of 'this'. We create a callback bindid function to use with EventEmitter
      this.changeCallback = this.onStoreChange.bind(this)
    }

    componentDidMount() {
      AuthStore.addChangeListener(this.changeCallback)
    }

    componentWillUnmount() {
      AuthStore.removeChangeListener(this.changeCallback)
    }

    onStoreChange() {
      this.setState(this._getLoginState())
    }

    _getLoginState() {
      return {
        userLoggedIn: AuthStore.isLoggedIn(),
        user: AuthStore.user,
        token: AuthStore.token
      }
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          user={this.state.user}
          token={this.state.token}
          userLoggedIn={this.state.userLoggedIn} />
      )
    }
  }
}
