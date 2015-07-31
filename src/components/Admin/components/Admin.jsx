import React, { Component } from 'react'
import Header from '../../Common/Header'
import Footer from '../../Common/Footer'
import '../../../less/main'

export default class Admin extends Component {
  render () {
    return (
      <div>
        <Header/>
        <div className="container">
          <h1>Hello, Admin!</h1>
        </div>
        <Footer/>
      </div>
    )
  }
}
