import React from 'react'
import { Link } from 'react-router'
import AuthStore from '../stores/AuthStore'
import AuthActions from '../actions/AuthActions'
import Header from '../../Common/Header'
import Footer from '../../Common/Footer'
import Formsy from 'formsy-react'
import TextInput from '../../Form/TextInput'
import Button from '../../Form/Button'
import Spinner from '../../Form/Spinner'

export default class Login extends React.Component {
  constructor() {
    super()
    this.state = AuthStore.getLoginState()

    // In ES6, no autobinding of 'this'. We create a callback bindid function to use with EventEmitter
    this.changeCallback = this.onStoreChange.bind(this)
  }

  componentDidMount () {
    document.title = "Login | My App"
    //this.refs.email.refs.inputField.focus()
  }

  componentWillMount() {
    AuthStore.addChangeListener(this.changeCallback)
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this.changeCallback)
  }

  onStoreChange() {
    this.setState(AuthStore.getLoginState())
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

  resetForm() {
    this.refs.form.reset()
  }

  submitForm(data, resetForm, invalidateForm) {
    AuthActions.login(data)
    //invalidateForm({email: 'This is invalid'})
  }

  render() {
    let alerts = []
    if (this.state.success) {
      alerts.push(<div key="success" className="alert alert-success"> Success. Redirecting...</div>)
    }
    else if (this.state.error) {
      alerts.push(<div key="danger" className="alert alert-danger">{this.state.error}</div>)
    }

    return (
      <div>
        <Header/>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="page-header">
                <h1>Login</h1>
              </div>
              {alerts}
              <Formsy.Form
                onValidSubmit={this.submitForm.bind(this)}
                onValid={this.enableButton.bind(this)}
                onInvalid={this.disableButton.bind(this)}
                ref="form"
                disabled = {this.state.loading}
                >
                <TextInput
                  name="email"
                  label="Email"
                  type="text"
                  placeholder = "Enter email"
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
                  placeholder = "Enter Password"
                  required
                />
                <Button
                    type="submit"
                    inputClasses={{ 'btn-primary': true }}
                    disabled={!this.state.canSubmit || this.state.loading}>

                    Sign in
                    <Spinner space="left" show={this.state.loading} />
                </Button>
              </Formsy.Form>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
