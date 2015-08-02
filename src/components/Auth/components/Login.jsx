import React from 'react'
import { Link } from 'react-router'
import AuthStore from '../AuthStore'
import Header from '../../Common/Header'
import Footer from '../../Common/Footer'
import Formsy from 'formsy-react'
import TextInput from '../../Form/TextInput'

export default class Login extends React.Component {
  constructor() {
    super()
    this.state = AuthStore.getLoginState()
  }

  componentDidMount () {
    document.title = "Login | My App"
    //this.refs.email.refs.inputField.focus()
  }

  enableButton() {
    this.setState({
      canSubmit: true
    })
  }

  disableButton() {
    this.setState({
      canSubmit: false
    })
  }

  submit(model) {
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="page-header">
                <h1>Login</h1>
              </div>
              <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
                <TextInput
                  name="email"
                  label="Email"
                  type="text"
                  placeholder = "Your email"
                  validations={{
                    isEmail: true,
                    maxLength: 50
                  }}
                  validationErrors={{
                    isEmail: 'You have to type valid email',
                    maxLength: 'You can not type in more than 50 characters'
                  }}
                  required
                />
                <TextInput
                  name="password"
                  label="Password"
                  type="password"
                  placeholder = "Your Password"
                  required
                />
                <button type="submit" disabled={!this.state.canSubmit} className="btn btn-primary">Submit</button>
              </Formsy.Form>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
