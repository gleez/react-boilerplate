import React from 'react'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import ReactMixin from 'react-mixin'
import Header from './Common/Header'
import Footer from './Common/Footer'
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
    document.title = "Contact | My App"
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
              <form role="form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" valueLink={this.linkState('name')} className="form-control" ref="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="text" valueLink={this.linkState('email')} className="form-control" ref="email" placeholder="Your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea type="text" valueLink={this.linkState('message')} className="form-control" ref="message" rows="5" placeholder="Your message" required />
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
            <div className="col-sm-6 text-center">
              <div className="page-header">
                <h1>Contact us</h1>
              </div>
              <p className="lead">Freddy can't wait to hear from you.</p><i className="fa fa-reply-all bamf"></i>
              <div>1428 Elm Street • San Francisco, CA 94122</div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
ReactMixin(Contact.prototype, LinkedStateMixin)
