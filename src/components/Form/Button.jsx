import React from 'react'
import ObjectAssign from 'object-assign'
import ClassNames from 'classnames'

export default class Button extends React.Component {
  constructor() {
    super()
    this.state = {
      type: 'button'
    }
  }

  render() {
    let inputClasses = ClassNames(ObjectAssign({
        'btn': true
    }, this.props.inputClasses))

    return (
      <button
          type={this.props.type}
          className={inputClasses}
          name={this.props.name}
          value={this.props.value}
          disabled={this.props.disabled ? 'disabled' : undefined}
          onClick={this.props.onClick}>

          {this.props.children}
      </button>
    )
  }
}
