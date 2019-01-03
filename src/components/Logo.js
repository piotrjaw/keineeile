import React from 'react'
import logo from '../img/logo.svg'

const Logo = class extends React.Component {
  render() {
    return <img
      alt="keineeile.com"
      className={ this.props.className }
      src={logo}
    />
  }
}

export default Logo
