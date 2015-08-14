import React from 'react'
import AuthStore from '../stores/AuthStore'
import AuthActions from '../actions/AuthActions'
import Header from '../../Common/Header'
import Footer from '../../Common/Footer'
import Alert from '../../Common/Alert'
import Form from '../../Form/Form'
import '../../../less/Auth'

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
    document.body.classList.add('AuthBody')
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this.changeCallback)
    document.body.classList.remove('AuthBody')
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
          <div className="card col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
            <div className="card-container">
              {alerts}
              <img className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
              <p className="profile-name-card"></p>
              <Form {...this.state} className="form-signin">
                <Form.TextInput
                  name="email"
                  type="text"
                  hideLabel={true}
                  placeholder = "Email address"
                  validations={{
                    isEmail: true,
                    maxLength: 50
                  }}
                  validationErrors={{
                    isEmail: 'You have to type valid email',
                    maxLength: 'You can not type in more than 50 characters'
                  }}
                  required
                  autofocus
                />
                <Form.TextInput
                  name="password"
                  type="password"
                  hideLabel={true}
                  placeholder = "Password"
                  required
                />
                <Form.Button
                  type="submit"
                  inputClasses={{ 'btn-lg btn-primary btn-block btn-signin': true }}
                  spinner={this.state.loading}
                  disabled={!this.state.canSubmit || this.state.loading}>
                  Sign in
                </Form.Button>
              </Form>
              <a href="#" className="forgot-password"> Forgot the password? </a>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
