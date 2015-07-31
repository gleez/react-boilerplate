import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
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
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/auth/register">Sign up</Link></li>
              <li><Link to="/auth/login">Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
