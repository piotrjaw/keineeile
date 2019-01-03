import React from 'react'

const Icon = class extends React.Component {
  render() {
    const { name, size } = this.props
    const Component = require(`../img/icons/${name}.svg`)

    return (
      <Component
        className={ this.props.className }
        height={ size }
        width={ size }
      />
    )
  }
}

export default Icon
