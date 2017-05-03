import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HelloWorld extends Component {
  static displayName = 'HelloWorld'
  static propTypes = {
    name: PropTypes.string,
  }

  static defaultProps = {
    name: 'world',
  }

  render() {
    const { name } = this.props

    return <h1>{`Hello ${name}!`}</h1>
  }
}

export default HelloWorld
