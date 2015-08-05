import React from 'react'
import ObjectAssign from 'object-assign'
import ClassNames from 'classnames'

export default class Alert extends React.Component {
  static propTypes = {
    withIcon: React.PropTypes.bool,
    alertIcon: React.PropTypes.string
    type: React.PropTypes.oneOf(['warning', 'error', 'success', 'info', 'debug']),
    dismissable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.func]),
    dismissAfter: React.PropTypes.number,
    closeLabel: React.PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state ={
      type: 'info',
      dismissable: false,
      withIcon: false,
      alertIcon: false,
      alertVisible: true,
      closeLabel: 'Close Alert'
    }
  }

  componentDidMount() {
    if (this.props.dismissAfter && this.props.onDismiss) {
      this.dismissTimer = setTimeout(this.props.onDismiss, this.props.dismissAfter)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.dismissTimer)
  }

  handleAlertDismiss() {
    let {dismissable} = this.props;
    if (typeof dismissable === 'function') dismissable()
    this.setState({alertVisible: false})
  }

  renderDismissButton() {
    return (
      <button
        type="button"
        className="close"
        aria-label={this.props.closeLabel}
        onClick={this.props.onDismiss}>
        <span aria-hidden="true">&times;</span>
      </button>
    )
  }

  render() {
    let {dismissable, withIcon, alertIcon, children, ...others} = this.props

    if (this.state.alertVisible) {
      this.props.onDismiss = dismissable ? this.handleAlertDismiss : null
      let isDismissable = !!this.props.onDismiss

      if (withIcon) {
        let icon = <i className={`fa ${alertIcon}`}></i>
        children = <div>{icon} {children}</div>
      }

      let alertClasses = ClassNames(ObjectAssign({
        'alert': true,
        'alert-dismissable': isDismissable
        'alert-' + this.props.type: true
      }, this.props.className))

      return (
        <div {...this.props} role='alert' className={alertClasses}>
          {isDismissable ? this.renderDismissButton() : null}
          {this.props.children}
        </div>
      )
    }

    return null
  }
}
