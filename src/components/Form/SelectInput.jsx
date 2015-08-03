import React from 'react'
import ObjectAssign from 'object-assign'
import ClassNames from 'classnames'
import Formsy from "formsy-react"

let SelectInput = React.createClass({
  mixins: [Formsy.Mixin],

  changeValue: function(event) {
    let target = event.currentTarget
    let value
    if (this.props.multiple) {
      value = []
      for (var i = 0; i < target.length; i++){
        let option = target.options[i]
        if (option.selected) {
          value.push(option.value)
        }
      }
    } else {
      value = target.value
    }
    this.setValue(value)
    this.props.onChange(this.props.name, value)
  },

  render: function() {
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
        {/*iconComponent*/}
        {helpComponent}
      </div>
    )
  },

  renderElement: function() {
    let inputClasses = ClassNames(ObjectAssign({
      'form-control': true
    }, this.props.inputClasses))

    let optionNodes = this.props.options.map(function(item) {
      return (
        <option disabled={item.disabled} key={item.value} value={item.value}>{item.label}</option>
      )
    })

    return (
      <select
        className={inputClasses}
        value={this.getValue()}
        onChange={this.changeValue}
        disabled={this.isFormDisabled() || this.props.disabled}
      >
      {optionNodes}
      </select>
    )
  }
})

export default SelectInput
