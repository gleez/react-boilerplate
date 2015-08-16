import React from 'react'
import AuthStore from '../stores/AuthStore'
import Header from '../../Common/Header'
import Footer from '../../Common/Footer'
import Form from '../../Form/Form'

export default class Register extends React.Component {
  constructor() {
    super()

    AuthStore.signupReset()
    this.state = AuthStore.getSignupState()

    // In ES6, no autobinding of 'this'. We create a callback bindid function to use with EventEmitter
    this.changeCallback = this.onStoreChange.bind(this)

    // Form Submission and button handling
    this.state.submitForm = this.submitForm.bind(this)
    this.state.setFormState = this.setFormState.bind(this)
  }

  componentDidMount () {
    document.title = "Signup | React • Starter Kit"
  }

  componentWillMount() {
    AuthStore.addChangeListener(this.changeCallback)
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this.changeCallback)
  }

  onStoreChange() {
    this.setState(AuthStore.getSignupState())
  }

  setFormState(props) {
    this.setState(props)
  }

  submitForm(data) {
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
              <Form {...this.state}>
                <Form.TextInput
                  name="name"
                  label="Full Name"
                  type="text"
                  placeholder = "Your Name"
                  validations="isWords"
                  validationError="This is not a valid name"
                  required
                />
                <Form.TextInput
                  name="company"
                  label="Company"
                  type="text"
                  placeholder = "Your Company"
                  validations="isWords"
                  validationError="This is not a valid company"
                  required
                />
                <Form.TextInput
                  name="email"
                  label="Email"
                  type="text"
                  placeholder = "Your Email"
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
                  placeholder="Your Password"
                  validations={{
                    minLength: 5
                  }}
                  validationErrors={{
                    minLength: 'You can not type less than 5 characters'
                  }}
                  required
                />
                <Form.Button
                  type="submit"
                  inputClasses={{ 'btn-primary': true }}
                  spinner={this.state.loading}
                  disabled={!this.state.canSubmit || this.state.loading}
                >
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
