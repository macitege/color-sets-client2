import React from 'react'

const SavedPalette = ({ hex }) => (
  <React.Fragment>
    <div className="palette-wrapper">
      <div id="color1" className="palette-circle" style={{ background: hex.color1 }}>
        <p className="color-code1 code" name='color1' value={hex.color1}></p>
      </div>
      <div id="color2" className="palette-circle" style={{ background: hex.color2 }}>
        <p className="color-code2 code" name='color2' value={hex.color2}></p>
      </div>
      <div id="color3" className="palette-circle" style={{ background: hex.color3 }}>
        <p className="color-code3 code" name='color3' value={hex.color3}></p>
      </div>
      <div id="color4" className="palette-circle" style={{ background: hex.color4 }}>
        <p className="color-code4 code" name='color4' value={hex.color4}></p>
      </div>
      <div id="color5" className="palette-circle" style={{ background: hex.color5 }}>
        <p className="color-code5 code" name='color5' value={hex.color5}></p>
      </div>
    </div>
    <button className="generate-btn">Delete</button>
    <button className="save-btn">Edit</button>
  </React.Fragment>
)

export default SavedPalette
