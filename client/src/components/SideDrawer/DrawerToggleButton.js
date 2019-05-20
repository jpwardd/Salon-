import React from 'react'
import './DrawToggleButton.css'

const DrawerToggleButton = (props) => {
  return (
    <button onClick={props.click} className="toggle-button">
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
    </button>
  )
}

export default DrawerToggleButton
