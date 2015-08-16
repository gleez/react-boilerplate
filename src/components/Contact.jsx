import React from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import Formsy from 'formsy-react'
import TextInput from './Form/TextInput'
import TextAreaInput from './Form/TextAreaInput'
import '../less/main'

export default class Contact extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  componentDidMount () {
    document.title = "Contact | React • Starter Kit"
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

  submitForm(data) {
    console.log(data)
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="page-header">
                <h1>Send a message</h1>
              </div>
              <Formsy.Form onValidSubmit={this.submitForm.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)} ref="form">
                <TextInput
                  name="name"
                  label="Your Name"
                  type="text"
                  placeholder = "Enter Name"
                  validations="isWords"
                  validationError="This is not a valid name"
                  required
                />
                <TextInput
                  name="email"
                  label="Your Email"
                  type="text"
                  placeholder = "Enter Email"
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
              <TextAreaInput
                  name="message"
                  label="Message"
                  placeholder = "Enter Message"
                  rows={5}
                  validations={{
                    minLength: 10
                  }}
                  validationErrors={{
                    minLength: 'Not a valid message'
                  }}
                  required
                />
                <button type="submit" disabled={!this.state.canSubmit} className="btn btn-primary">Send Message</button>
              </Formsy.Form>
            </div>
            <div className="col-sm-6 text-center">
              <div className="page-header">
                <h1>Contact us</h1>
              </div>
              <p className="lead">Sunny can't wait to hear from you.</p><i className="fa fa-reply-all bamf"></i>
              <div>1600 N San Fernando Blvd • Burbank CA 91504</div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
