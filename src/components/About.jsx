import React, { Component } from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import '../less/main'

export default class About extends Component {
  componentDidMount () {
    document.title = "About | React • Starter Kit"
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="page-header">
                <h1>About us</h1>
              </div>
              <div className="media">
                <div className="pull-left">
                  <div className="media-object"><i className="fa fa-camera-retro fa-4x"></i></div>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Leo Damon</h4>
                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                </div>
              </div>
              <div className="media text-right">
                <div className="pull-right">
                  <div className="media-object"><i className="fa fa-camera-retro fa-4x"></i></div>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Mathew DiCaprio</h4>
                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                </div>
              </div>
              <div className="media">
                <div className="pull-left">
                  <div className="media-object"><i className="fa fa-camera-retro fa-4x"></i></div>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Nick Jackson</h4>
                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 text-center">
              <div className="page-header">
                <h1>Prestige worldwide</h1>
              </div>
              <p className="lead">The first name in entertainment.</p><i className="fa fa-volume-up bamf"></i>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
