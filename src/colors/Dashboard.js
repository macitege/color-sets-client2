import React, { Component } from 'react'
import { getPalettes } from './api'
import SavedPalette from './SavedPalette'

class Dashboard extends Component {
  constructor () {
    super()

    this.state = {}
  }

  componentWillMount () {
    const { user } = this.props
    getPalettes(user.token)
      .then(res => this.setState({ colors: res.data.colors.reverse() }))
      // .then((res) => { console.log(res) })
      .catch(console.error)
  }

  parseHex (colorHexStr) {
    const hexArr = colorHexStr.split('-')
    const hex = {
      color1: hexArr[0],
      color2: hexArr[1],
      color3: hexArr[2],
      color4: hexArr[3],
      color5: hexArr[4]
    }
    return hex
  }

  render () {
    if (!this.state.colors) {
      return (
        <React.Fragment>
          <h1>Saved Palettes</h1>
          <h2>Loading</h2>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        <h1>Saved Palettes</h1>
        { this.state.colors.map(color => {
          return <SavedPalette
            key={color.id}
            colorId={color.id}
            hex={this.parseHex(color.hex)}
            user={this.props.user}
            alert={this.props.alert} />
        })}
      </React.Fragment>
    )
  }
}

export default Dashboard
