import React from 'react'
import ObjectAssign from 'object-assign'
import ClassNames from 'classnames'
import Formsy from "formsy-react"

var TextInput = React.createClass({
  mixins: [Formsy.Mixin],

  changeValue(event) {
    this.setValue(event.currentTarget.value)
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

    let inputClasses = ClassNames(ObjectAssign({
      'form-control': true
    }, this.props.inputClasses))

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
        <input
          name={this.props.name}
          type={this.props.type || 'text'}
          ref={this.props.name}
          className={inputClasses}
          value={this.getValue()}
          onChange={this.changeValue}
          placeholder={this.props.placeholder}
          autoCapitalize={this.props.autoCapitalize}
          disabled={this.isFormDisabled() || this.props.disabled}
        />
        {iconComponent}
        {helpComponent}
      </div>
    )
  }
})

export default TextInput
