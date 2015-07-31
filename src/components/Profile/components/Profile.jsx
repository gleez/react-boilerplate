import React, { Component } from 'react'
import Header from '../../Common/Header'
import Footer from '../../Common/Footer'
import '../../../less/main'

export default class Profile extends Component {
  componentDidMount () {
    document.title = "Profile | My App"
  }

  render () {
    return (
      <div>
        <Header/>
        <div className="container">
          <h1>Hello, Profile!</h1>
        </div>
        <Footer/>
      </div>
    )
  }
}
