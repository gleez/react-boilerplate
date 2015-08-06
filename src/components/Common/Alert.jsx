import React from 'react'
import ObjectAssign from 'object-assign'
import ClassNames from 'classnames'

export default class Alert extends React.Component {
  constructor() {
    super()

    this.state ={
      type: 'info',
      dismissable: false,
      icon: false,
      visible: true,
      closeLabel: 'Close Alert'
    }

    // In ES6, no autobinding of 'this'. We create a callback bindid function to use with EventEmitter
    this.dismissCallback = this.handleAlertDismiss.bind(this)
  }

  componentDidMount() {
    if (this.props.dismissAfter && this.props.dismissable) {
      this.dismissTimer = setTimeout(this.dismissCallback, this.props.dismissAfter)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.dismissTimer)
  }

  handleAlertDismiss() {
    let {dismissable} = this.props;
    if (typeof dismissable === 'function') dismissable()
    this.setState({visible: false})
  }

  renderDismissButton() {
    return (
      <button
        type="button"
        className="close"
        aria-label={this.props.closeLabel}
        onClick={this.dismissCallback}>
        <span aria-hidden="true">&times;</span>
      </button>
    )
  }

  render() {
    let alertIcon
    let {type, dismissable, icon} = this.props

    if (this.state.visible) {
      let onDismiss = dismissable ? this.handleAlertDismiss : null
      let isDismissable = !!onDismiss

      if (icon) {
        alertIcon = <i className={`fa ${icon}`}></i>
      }

      let alertClasses = ClassNames(ObjectAssign({
        'alert': true,
        'alert-dismissable': isDismissable,
        'alert-warning': type == "warning",
        'alert-danger': type == "danger",
        'alert-success': type == "success",
        'alert-info': type == "info",
        'alert-debug': type == "debug"
      }, this.props.className))

      return (
        <div role='alert' className={alertClasses}>
          {isDismissable ? this.renderDismissButton() : null}
          {alertIcon}&nbsp;
          {this.props.children}
        </div>
      )
    }

    return null
  }
}

Alert.propTypes = {
  alertIcon: React.PropTypes.string,
  type: React.PropTypes.oneOf(['warning', 'danger', 'success', 'info', 'debug']),
  dismissable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.func]),
  dismissAfter: React.PropTypes.number,
  closeLabel: React.PropTypes.string,
  onDismiss: React.PropTypes.func
}
