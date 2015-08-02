import React from 'react'
import ObjectAssign from 'object-assign'
import ClassNames from 'classnames'
import {HOC} from 'formsy-react'

class MyInput extends React.Component {
  constructor() {
    super()
    this.state = {
      type: 'text',
      autoCapitalize: 'off'
    }
  }

  onChange(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    // Ugly hack to pass the props(modified formsy HOC.js)
    let InputProps = this.props.getInputProps

    let groupClasses = ClassNames(ObjectAssign({
        'form-group': true,
        'has-error': this.props.showError()
    }, InputProps.groupClasses))

    let labelClasses = ClassNames(ObjectAssign({
        'control-label': true
    }, InputProps.labelClasses))

    let helpClasses = ClassNames(ObjectAssign({
        'help-block': true
    }, this.props.helpClasses))

    let inputClasses = ClassNames(ObjectAssign({
        'form-control': true
    }, InputProps.inputClasses))

    let labelComponent
    if (!InputProps.hideLabel) {
      labelComponent = <label className={labelClasses}>
        {InputProps.label}
      </label>
    }

    let helpComponent
    if (!InputProps.hideHelp) {
      helpComponent = <span className={helpClasses}>
        {this.props.getErrorMessage()}
      </span>
    }

    return (
      <div className={groupClasses}>
        {labelComponent}
        <input
          name={InputProps.name}
          type={InputProps.type || this.state.type}
          placeholder={InputProps.placeholder}
          ref={InputProps.name}
          autoCapitalize={this.props.autoCapitalize}
          className={inputClasses}
          value={this.props.getValue()}
          disabled={this.props.isFormDisabled() ? 'disabled' : undefined}
          onChange={this.onChange.bind(this)}
        />
        {helpComponent}
      </div>
    )
  }
}
export default HOC(MyInput)
