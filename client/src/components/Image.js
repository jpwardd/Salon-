import React from 'react'

const Image = (props) => {
  return (
    <div>
      <img src={props.source} alt={props.alt} className={props.className} />
    </div>
  )
}

export default Image
