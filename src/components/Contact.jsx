import React, { Component } from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import '../less/main'

export default class Contact extends Component {
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
                  <input type="text" className="form-control" ref="email" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="text" className="form-control" ref="email" placeholder="Your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea type="text" className="form-control" ref="message" rows="5" placeholder="Your message" />
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
