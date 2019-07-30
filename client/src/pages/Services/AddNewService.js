import React, { useState} from 'react'

import { Form, Box, TextInput, Select } from 'grommet'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Button from '../../components/Button'
import { setAlert, getServices } from '../../actions'
import './AddNewService.css'

const OPTIONS = ['Cuts', 'Color', 'HighLights', 'Kids', 'Wax', 'Misc'];


const AddNewService = ({setAlert, history}) => {
  
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
    
    // createService(name, price, category)
    history.push('/services')
  }
  
  return (
    
    <div className="ns-container">
     <Box
      align="center"
      pad="0"
      margin="0"
     >
      <h2 style={{ fontSize: "50px"}} className="title">New Service</h2>
     </Box>
       <Form className="ns-form-container" onSubmit={e => onSubmit(e)}>
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
          <Box align="center">

          <Button 
            buttonText="add"
            className="add-btn"
            type="submit"
          />
          </Box>
        </Form>
     
    </div>
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
export default connect(mapStateToProps, {getServices, setAlert})(AddNewService)
