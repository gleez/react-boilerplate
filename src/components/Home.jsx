import React, { Component } from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import '../less/main'

export default class Home extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <h1>Hello, World!</h1>
        </div>
        <Footer/>
      </div>
    )
  }
}
