import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, TextInput, Form, FormField } from 'grommet'
import { connect } from 'react-redux'
import { createClient, setAlert } from '../../actions'

import Button from '../../components/Button'
import './CreateClient.css'

const CreateClient = ({ createClient, setAlert, history }) => {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  })

  const { firstName, lastName, phoneNumber, email } = formData

  const onSubmit = async e => {
    e.preventDefault();
    if (firstName === '') {
      setAlert('First name is required', 'danger')
    }
    if (lastName === '') {
      setAlert('Last name is required', 'danger')
    }

    createClient(firstName, lastName, phoneNumber, email)
    history.push('/clients')
  }

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
  return (
    <div className="nc-container">
     <Box
      align="center"
      pad="0"
      margin="0"
     >
      <h2 style={{ fontSize: "50px"}} className="title">New Client</h2>
     </Box>
      
  
       <Form className="nc-form-container" onSubmit={e => onSubmit(e)}>
        <FormField>

          <TextInput 
            onChange={e => onChange(e)}
            placeholder="first name"
            name="firstName"
            value={firstName}
          />
        </FormField>

        <FormField>
          <TextInput 
            onChange={e => onChange(e)}
            placeholder="last name"
            name="lastName"
            value={lastName}
          />
        </FormField>
        
        <FormField>
          <TextInput 
            onChange={e => onChange(e)}
            placeholder="phone number"
            name="phoneNumber"
            value={phoneNumber}
          />
        </FormField>
        
        <FormField>
          <TextInput 
            onChange={e => onChange(e)}
            placeholder="email"
            name="email"
            value={email}
          />
        </FormField>
    
          <Box align="center">
          <Button 
            buttonText="Create"
            className="nc-add-btn"
            type="submit"
          />
          </Box>
        </Form>
     
    </div>
  )
}

CreateClient.propTypes = {
  createClient: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
}

export default connect(null, { createClient, setAlert })(CreateClient)
