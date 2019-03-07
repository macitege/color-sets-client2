import React, { Component } from 'react'
import { onDestroy } from './api'
import { Redirect } from 'react-router'

class SavedPalette extends Component {
  constructor () {
    super()

    this.state = {
      deleted: false
    }
  }

  destroyPalette = () => {
    onDestroy(this.props.colorId, this.props.user.token)
      .then(res => this.setState({ deleted: true }))
      .catch(console.error)
  }

  render () {
    const { hex } = this.props

    if (this.state.deleted) {
      return <Redirect to="/dashboard"/>
    }

    return (
      <React.Fragment>
        <div className="palette-wrapper">
          <div id="color1" className="palette-circle" style={{ background: hex.color1 }}>
            <p className="color-code1 code" name='color1' >{hex.color1}</p>
          </div>
          <div id="color2" className="palette-circle" style={{ background: hex.color2 }}>
            <p className="color-code2 code" name='color2' >{hex.color2}</p>
          </div>
          <div id="color3" className="palette-circle" style={{ background: hex.color3 }}>
            <p className="color-code3 code" name='color3' >{hex.color3}</p>
          </div>
          <div id="color4" className="palette-circle" style={{ background: hex.color4 }}>
            <p className="color-code4 code" name='color4' >{hex.color4}</p>
          </div>
          <div id="color5" className="palette-circle" style={{ background: hex.color5 }}>
            <p className="color-code5 code" name='color5' >{hex.color5}</p>
          </div>
        </div>
        <button className="delete-btn" onClick={this.destroyPalette}>Delete</button>
        <button className="edit-btn">Edit</button>
      </React.Fragment>
    )
  }
}

export default SavedPalette
