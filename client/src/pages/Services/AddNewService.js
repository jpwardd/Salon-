import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import { Form, FormField, TextInput } from 'grommet'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Button from '../../components/Button'
import { setAlert, getServices, createService } from '../../actions'

const FormContainer = styled.div`
   width: 75%;
   border: 1px solid black;
   padding: 20px;
`

const AddNewService = ({createService, setAlert, history}) => {
   useEffect(() => {
     getServices()
   }, [getServices])

  const [formData, setFormData] = useState({
    name: '',
    price: ''
  })

  const { name, price } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    if (name === '') {
      setAlert('Name is required', 'danger')
    }

    if (price === '') { 
      setAlert('Price is required', 'danger')
    }
    
    createService(name, price)
    history.push('/services')
  }
 
  return (
    
    <FormContainer>
      <h3>Add A Service</h3>
       <Form onSubmit={e => onSubmit(e)}>
        <FormField>
          <TextInput 
            onChange={e => onChange(e)}
            placeholder="name"
            name="name"
            value={name}
          />
        </FormField>
        <FormField>
          <TextInput 
             onChange={e => onChange(e)}
            placeholder="price"
            name="price"
            value={price}
          />
        </FormField>
        <Button 
          buttonText="add"
           style = {{ width: '100%', height: 40, backgroundColor: 'black', color: 'white', fontSize: 18}}
           type="submit"
        />
      </Form>
  
    </FormContainer>
  )
}
AddNewService.propTypes = {
  getServices: PropTypes.func.isRequired,
  createService: PropTypes.func.isRequired,
  service: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  service: state.service
})
export default connect(mapStateToProps, {createService, getServices, setAlert})(AddNewService)
