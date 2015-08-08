import React from 'react'
import ObjectAssign from 'object-assign'
import ClassNames from 'classnames'
import Spinner from './Spinner'

export default class Button extends React.Component {
  constructor() {
    super()
    this.state = {
      type: 'button',
      spinner: false
    }
  }

  render() {
    let inputClasses = ClassNames(ObjectAssign({
      'btn': true
    }, this.props.inputClasses))

    let spinner
    if(this.props.spinner){
      spinner = <Spinner space="left" show={true} />
    }

    return (
      <button
        type={this.props.type}
        className={inputClasses}
        name={this.props.name}
        value={this.props.value}
        disabled={this.props.disabled ? 'disabled' : undefined}
        onClick={this.props.onClick}>
        {this.props.children}
        {spinner}
      </button>
    )
  }
}
