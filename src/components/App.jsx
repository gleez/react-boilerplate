import React, { Component } from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import Home from './Home'
import '../less/main'

export default class App extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div>
        {this.props.children || <Home />}
      </div>
    )
  }
}
