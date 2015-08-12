import React from 'react'
import { Link } from 'react-router'
import AuthStore from '../Auth/stores/AuthStore'
import AuthActions from '../Auth/actions/AuthActions'

export default class Header extends React.Component {
  constructor() {
    super()
    this.state = this.getLoginState()

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
    this.setState(this.getLoginState())
  }

  getLoginState() {
    return {
      userLoggedIn : AuthStore.isLoggedIn()
    }
  }

  logout(e) {
    e.preventDefault()
    AuthActions.logout()
  }

  headerItems() {
    if (!this.state.userLoggedIn) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/auth/register">Sign up</Link></li>
          <li><Link to="/auth/login">Login</Link></li>
        </ul>
      )
    } else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/profile">Profile</Link></li>
          <li><a href="" onClick={this.logout}>Logout</a></li>
        </ul>
      )
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default bs-docs-nav navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              aria-controls="navbar"
              aria-expanded="false"
              data-target="#navbar"
              data-toggle="collapse"
              className="navbar-toggle collapsed"
              type="button" >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">My App</Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            {this.headerItems()}
          </div>
        </div>
      </nav>
    )
  }
}
