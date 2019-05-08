import React, { Fragment } from 'react'

const Button = (props) => {
  return (
    <Fragment>
      <button type={props.type} style={ props.style} className={props.className} onClick={props.onClick}> {props.buttonText} </button> 
    </Fragment>
  )
}

export default Button
