import React from 'react'
import AuthStore from '../stores/AuthStore'
import AuthActions from '../actions/AuthActions'
import Header from '../../Common/Header'
import Footer from '../../Common/Footer'
import Alert from '../../Common/Alert'
import Form from '../../Form/Form'

export default class Login extends React.Component {
  constructor() {
    super()

    AuthStore.loginReset()
    this.state = AuthStore.getLoginState()

    // In ES6, no autobinding of 'this'. We create a callback bindid function to use with EventEmitter
    this.changeCallback = this.onStoreChange.bind(this)

    // Form Submission and button handling
    this.state.submitForm = this.submitForm.bind(this)
    this.state.setFormState = this.setFormState.bind(this)
  }

  componentDidMount () {
    document.title = "Login | My App"
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

  setFormState(props) {
    this.setState(props)
  }

  submitForm(data, resetForm, invalidateForm) {
    AuthActions.login(data)
  }

  render() {
    let alerts = []
    if (this.state.success) {
      alerts.push(<Alert key="success" type="success" dismissable dismissAfter={5000} icon='fa-check-circle'> Success. Redirecting...</Alert>)
    }
    else if (this.state.error) {
      alerts.push(<Alert key="danger" type="danger" dismissable dismissAfter={5000} icon='fa-exclamation-triangle'> {this.state.help}</Alert>)
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
              <Form {...this.state}>
                <Form.TextInput
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
                <Form.TextInput
                  name="password"
                  label="Password"
                  type="password"
                  placeholder = "Enter Password"
                  required
                />
                <Form.Button
                  type="submit"
                  inputClasses={{ 'btn-primary': true }}
                  spinner={this.state.loading}
                  disabled={!this.state.canSubmit || this.state.loading}>
                  Sign in
                </Form.Button>
              </Form>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
