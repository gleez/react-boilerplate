import React from 'react'
import ObjectAssign from 'object-assign'
import ClassNames from 'classnames'
import Formsy from "formsy-react"

let TextInput = React.createClass({
  mixins: [Formsy.Mixin],

  propTypes: {
    type: React.PropTypes.oneOf([
      'color',
      'date',
      'datetime',
      'datetime-local',
      'email',
      'hidden',
      'month',
      'number',
      'password',
      'range',
      'search',
      'tel',
      'text',
      'time',
      'url',
      'week'
    ])
  },

  getDefaultProps: function() {
    return {
      type: 'text'
    }
  },

  changeValue(event) {
    let value = event.currentTarget.value
    this.setValue(value)
    //this.props.onChange(this.props.name, value)
  },

  renderElement: function() {
    let inputClasses = ClassNames(ObjectAssign({
      'form-control': true
    }, this.props.inputClasses))

    return (
      <input
        name={this.props.name}
        type={this.props.type}
        ref={this.props.name}
        className={inputClasses}
        value={this.getValue()}
        onChange={this.changeValue}
        placeholder={this.props.placeholder}
        autoCapitalize={this.props.autoCapitalize}
        disabled={this.isFormDisabled() || this.props.disabled}
      />
    )
  },

  render() {
    let groupClasses = ClassNames(ObjectAssign({
      'form-group': true,
      'has-error': this.showError(),
      'has-feedback': this.showError()
    }, this.props.groupClasses))

    let labelClasses = ClassNames(ObjectAssign({
      'control-label': true
    }, this.props.labelClasses))

    let helpClasses = ClassNames(ObjectAssign({
      'help-block': true
    }, this.props.helpClasses))

    let labelComponent
    if (!this.props.hideLabel) {
      labelComponent = <label className={labelClasses}>
        {this.props.label}
      </label>
    }

    let helpComponent
    if (!this.props.hideHelp) {
      helpComponent = <span className={helpClasses}>
        {this.props.requiredMessage}
        {this.getErrorMessage()}
      </span>
    }

    let iconComponent
    if (!this.props.hideFeedback && this.showError()) {
      let iconClassName = 'fa fa-times form-control-feedback'
      iconComponent = <span className={iconClassName} aria-hidden="true"></span>
    }

    return (
      <div className={groupClasses}>
        {labelComponent}
        {this.renderElement()}
        {iconComponent}
        {helpComponent}
      </div>
    )
  }
})

export default TextInput
