import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import { Form, FormField, TextInput, Select } from 'grommet'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Button from '../../components/Button'
import { setAlert, getServices, createService } from '../../actions'

const FormContainer = styled.div`
   width: 75%;
   border: 1px solid black;
   padding: 20px;
`
const OPTIONS = ['Cuts', 'Color', 'HighLights', 'Kids', 'Wax', 'Misc'];


const AddNewService = ({createService, setAlert, history}) => {
  
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    options: OPTIONS
  })

  const { name, price, category, options} = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSelectChange = e => setFormData({ ...formData, category: e.value})
  const onSubmit = async e => {
    e.preventDefault();
    if (name === '') {
      setAlert('Name is required', 'danger')
    }

    if (price === '') { 
      setAlert('Price is required', 'danger')
    }
    
    createService(name, price, category)
    history.push('/services')
  }
  
  return (
    <FormContainer>

      <h3>Add A Service</h3>
       <Form onSubmit={e => onSubmit(e)}>
          <TextInput 
            onChange={e => onChange(e)}
            placeholder="name"
            name="name"
            value={name}
          />
     
          <TextInput 
            onChange={e => onChange(e)}
            placeholder="price"
            name="price"
            value={price}
          />
   
         <Select
            value={category}
            onChange={e => onSelectChange(e)}
            options={options}
         />
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
