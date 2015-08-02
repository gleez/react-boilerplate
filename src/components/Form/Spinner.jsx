import React from 'react'
import ClassNames from 'classnames'

export default class Spinner extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let spaceLeft
    if (this.props.space === 'left') {
      spaceLeft = '\u00A0\u00A0'
    }

    let spaceRight
    if (this.props.space === 'right') {
      spaceRight = '\u00A0\u00A0'
    }

    let spinnerClasses = ClassNames({
      hidden: !this.props.show
    })

    return (
      <span className={spinnerClasses}>
          {spaceLeft}
          <i className="fa fa-refresh fa-spin"></i>
          {spaceRight}
      </span>
    )
  }
}
