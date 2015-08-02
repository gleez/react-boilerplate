import React from 'react'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import ReactMixin from 'react-mixin'
import Header from '../../Common/Header'
import Footer from '../../Common/Footer'
import Formsy from 'formsy-react'
import TextInput from '../../Form/TextInput'

export default class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      company: '',
      email: '',
      password: '',
      canSubmit: false
    }
  }

  componentDidMount () {
    document.title = "Signup | My App"
    //this.refs.name.refs.inputField.focus()
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
                <h1>Register</h1>
              </div>
              <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
                <TextInput
                  name="name"
                  label="Full Name"
                  type="text"
                  placeholder = "Your Name"
                  validations="isWords"
                  validationError="This is not a valid name"
                  required
                />
                <TextInput
                  name="company"
                  label="Company"
                  type="text"
                  placeholder = "Your Company"
                  validations="isWords"
                  validationError="This is not a valid company"
                  required
                />
                <TextInput
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
                <TextInput
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Your Password"
                  required
                />
              <button type="submit" disabled={!this.state.canSubmit} className="btn btn-primary" >Submit</button>
              </Formsy.Form>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

ReactMixin(Register.prototype, LinkedStateMixin)
