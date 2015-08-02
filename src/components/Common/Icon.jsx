import React from 'react'

export default class Icon extends React.Component {
  static propTypes = {
    symbol: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state ={className: ''}
  }

  render() {
    let className = 'fa fa-' + this.props.symbol + ' ' + this.props.className
    return (
      <i className={className} aria-hidden="true"></i>
    )
  }
}
