import React, { Component } from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import '../less/main'
import '../less/Home'

export default class Home extends Component {
  componentDidMount () {
    document.title = "React • Starter Kit"
  }

  render() {
    return (
      <div>
        <Header/>
        <main className="rs-masthead" id="content" role="main" tabIndex="-1">
          <div className="container">
            <span className="rs-booticon rs-booticon-lg rs-booticon-outline"><i className="fa fa-rocket"></i></span>
            <p className="lead">A starter kit for React.js Websites and Apps</p>
            <p>Your starting point for building great multi-device web experiences</p>
          </div>
        </main>

        <div className="container">
          <div className="rs-features">
      			<div className="row">
      				<div className="col-md-4">
      					<span className="fa-stack fa-3x">
      						<i className="fa fa-circle fa-stack-2x"></i>
      						<i className="fa fa-cogs fa-stack-1x fa-inverse"></i>
      					</span>
      					<h4>Multi-device Responsive Boilerplate</h4>
      					<p>A responsive boilerplate optimized for the multi-screen web, with highly optimized. One app, every device.</p>
      				</div>

      				<div className="col-md-4">
      					<span className="fa-stack fa-3x">
      						<i className="fa fa-circle fa-stack-2x"></i>
      						<i className="fa fa-windows fa-stack-1x fa-inverse"></i>
      					</span>
      					<h4>Cross-device Synchronization</h4>
      					<p>Synchronize clicks, scrolls, forms and live-reload across multiple devices as you edit your project. Powered by Webpack.</p>
      				</div>

      				<div className="col-md-4">
      					<span className="fa-stack fa-3x">
      						<i className="fa fa-circle fa-stack-2x"></i>
      						<i className="fa fa-flash fa-stack-1x fa-inverse"></i>
      					</span>
      					<h4>Live Browser Reloading</h4>
      					<p>Reload the browser in real-time anytime an edit is made without the need for an extension.</p>
      				</div>
      			</div>
      			<div className="row">
      				<div className="col-md-4">
      					<span className="fa-stack fa-3x">
      						<i className="fa fa-circle fa-stack-2x"></i>
      						<i className="fa fa-database fa-stack-1x fa-inverse"></i>
      					</span>
      					<h4>Performance Optimization</h4>
      					<p>Minify JavaScript, CSS, HTML and Images to help keep your pages lean and does lazyloading thanks to webpack.</p>
      				</div>
      				<div className="col-md-4">
      					<span className="fa-stack fa-3x">
      						<i className="fa fa-circle fa-stack-2x"></i>
      						<i className="fa fa-server fa-stack-1x fa-inverse"></i>
      					</span>
      					<h4>Built in HTTP Server</h4>
      					<p>A built in server for previewing your site means you can test your pages without messing with other tools.</p>
      				</div>
      				<div className="col-md-4 seo">
      					<span className="fa-stack fa-3x">
      						<i className="fa fa-circle fa-stack-2x"></i>
      						<i className="fa fa-chrome fa-stack-1x fa-inverse"></i>
      					</span>
      					<h4>LESS Support</h4>
      					<p> Compile Less into CSS with ease, bringing support for variables, mixins and more.</p>
      				</div>
      			</div>
      		</div>
        </div>

        <Footer/>
      </div>
    )
  }
}
