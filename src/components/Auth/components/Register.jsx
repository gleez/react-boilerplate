import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import ReactMixin from 'react-mixin'
import Header from '../../Common/Header'
import Footer from '../../Common/Footer'

export default class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      company: '',
      email: '',
      password: ''
    }
  }

  componentDidMount () {
    document.title = "Signup | My App"
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="page-header">
                <h1>Register</h1>
              </div>
              <form role="form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text"  valueLink={this.linkState('name')} className="form-control" ref="email" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text"  valueLink={this.linkState('company')} className="form-control" ref="email" placeholder="Your company" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="text"  valueLink={this.linkState('email')} className="form-control" ref="email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password"  valueLink={this.linkState('password')} className="form-control" ref="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary btn-lg">Sign up</button>
              </form>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

ReactMixin(Register.prototype, LinkedStateMixin)
