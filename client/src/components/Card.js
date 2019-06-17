import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const CardContainer = styled.div`
  width: 200px;
  box-shadow: ${props => props.border && '1px 0 10px rgba(0, 0, 0, 0.5)'};
`
const Card = props => {
  return (
    <CardContainer {...props} className={props.className}>
      
    </CardContainer>
  )
}

Card.propTypes = {

}

export default Card
