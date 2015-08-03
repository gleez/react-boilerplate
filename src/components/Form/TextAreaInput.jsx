import React from 'react'
import ObjectAssign from 'object-assign'
import ClassNames from 'classnames'
import Formsy from "formsy-react"

let TextAreaInput = React.createClass({
  mixins: [Formsy.Mixin],

  propTypes: {
    rows: React.PropTypes.number,
    cols: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      rows: 3,
      cols: 0 // React doesn't render the cols attribute if it is zero
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
      <textarea
        name={this.props.name}
        ref={this.props.name}
        rows={this.props.rows}
        cols={this.props.cols}
        className={inputClasses}
        value={this.getValue()}
        onChange={this.changeValue}
        placeholder={this.props.placeholder}
        disabled={this.isFormDisabled() || this.props.disabled}
      ></textarea>
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
        {/*iconComponent*/}
        {helpComponent}
      </div>
    )
  }
})

export default TextAreaInput
