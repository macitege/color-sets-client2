import React, { Component } from 'react'

import './Palette.scss'

import { makeColors, prepareForAPI } from './generator'
import { createPalette } from './api'

class Palette extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hex: undefined,
      rgba: undefined,
      hsla: undefined
    }
  }

  componentWillMount () {
    this.generate()
  }

  generate = () => {
    const colorSets = makeColors()
    this.setState({ hex: colorSets.hex, rgba: colorSets.rgba })
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    this.setState({ hex: { ...this.state.hex, ...updatedField } })
  }

  savePalette = () => {
    const data = prepareForAPI()
    createPalette(data, this.props.user.token)
      .then(console.log)
      .catch(console.error)
  }

  render () {
    const { handleChange, generate, savePalette } = this
    const { hex } = this.state
    return (
      <React.Fragment>
        <div className="palette-wrapper">
          <div id="color1" className="palette-circle" style={{ background: hex.color1 }}>
            <input className="color-code1 code" name='color1' value={hex.color1} onChange={handleChange}/>
          </div>
          <div id="color2" className="palette-circle" style={{ background: hex.color2 }}>
            <input className="color-code2 code" name='color2' value={hex.color2} onChange={handleChange}/>
          </div>
          <div id="color3" className="palette-circle" style={{ background: hex.color3 }}>
            <input className="color-code3 code" name='color3' value={hex.color3} onChange={handleChange}/>
          </div>
          <div id="color4" className="palette-circle" style={{ background: hex.color4 }}>
            <input className="color-code4 code" name='color4' value={hex.color4} onChange={handleChange}/>
          </div>
          <div id="color5" className="palette-circle" style={{ background: hex.color5 }}>
            <input className="color-code5 code" name='color5' value={hex.color5} onChange={handleChange}/>
          </div>
        </div>
        <button className="generate-btn" onClick={generate}>Generate</button>
        <button className="save-btn" onClick={savePalette}>Save Palette</button>
      </React.Fragment>
    )
  }
}

export default Palette
