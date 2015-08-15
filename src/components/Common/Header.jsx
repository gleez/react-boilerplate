import React from 'react'
import { Link } from 'react-router'
import AuthenticatedComponent from '../AuthenticatedHOC'
import AuthStore from '../Auth/stores/AuthStore'
import AuthActions from '../Auth/actions/AuthActions'

export default AuthenticatedComponent( class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  logout(e) {
    e.preventDefault()
    AuthActions.logout()
  }

  get headerItems() {
    if (!this.props.userLoggedIn) {
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
            <Link to="/" className="navbar-brand"><i className="fa fa-random fa-lg"></i> My App</Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            {this.headerItems}
          </div>
        </div>
      </nav>
    )
  }
})
