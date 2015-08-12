import React, { Component } from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import '../less/main'
import '../less/Home'

export default class Home extends Component {
  componentDidMount () {
    document.title = "My App"
  }

  render() {
    return (
      <div>
        <Header/>
        <main className="bs-docs-masthead" id="content" role="main" tabIndex="-1">
          <div className="container">
            <span className="bs-docs-booticon bs-docs-booticon-lg bs-docs-booticon-outline">R</span>
            <p className="lead">A starter kit for React.js Websites and Apps</p>
          </div>
        </main>
        <Footer/>
      </div>
    )
  }
}
