import React from 'react'
import PropTypes from 'prop-types'
import { SCREEN_WIDTHS } from './common-styles'

const RenderOnSize = class extends React.Component {
  state = { height: 0, width: 0 }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    const { width } = this.state
    const { children, size, up } = this.props
    if (up) {
      return width >= SCREEN_WIDTHS[size] ? children : null
    } else {
      return width < SCREEN_WIDTHS[size] ? children : null
    }
  }
}

RenderOnSize.propTypes = {
  up: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(SCREEN_WIDTHS)),
}

RenderOnSize.defaultProps = {
  up: true,
  size: 'desktop',
}

export default RenderOnSize
