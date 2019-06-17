import React, { useState, useEffect } from 'react'

import { Form, Box, TextInput, Select, FormField, CheckBox } from 'grommet'
import { CirclePicker } from 'react-color';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Button from '../../components/Button'
import { setAlert, createEmployee, loadUser } from '../../actions'
import './CreateEmployee.css'


const colors = ['#902EA8', '#19ADA9', '#DA8620', '#29C569', '#128FCC', '#F0544F', '#BEFFC7', '#315b63', '#B0413E', '#fbb7c0', '#FFEB3B', '#607D8B']

const CreateEmployee = ({loadUser, createEmployee, setAlert, history}) => {
   useEffect(() => {
     loadUser()
   }, [loadUser])

  
   const [formData, setFormData] = useState({
     name: '',
     email: '',
     color: '',
     password: '',
     password2: ''
   });

  const { name, email, color, password, password2} = formData
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleChangeComplete = color => setFormData({ ...formData, color: color.hex })
  const onSubmit = async e => {
    e.preventDefault();

    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    }

    createEmployee({ name, email, color, password });
    history.push('/dashboard')
  }

  console.log(color)

  return (
    
    <div className="ns-container">
     <Box
      align="center"
      pad="0"
      margin="0"
     >
      <h2 style={{ fontSize: "50px"}} className="title">New Employee</h2>
     </Box>
      
  
       <Form className="ns-form-container" onSubmit={e => onSubmit(e)}>
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
            placeholder="email"
            name="email"
            value={email}
          />
        </FormField>
        <Box margin="5px">

        <h3 className="color-title">Choose a color</h3>
        <CirclePicker 
          color={color}
          onChangeComplete={handleChangeComplete}
          colors={colors}
        />
        
        </Box>
        <FormField>
          <TextInput 
            onChange={e => onChange(e)}
            placeholder="password"
            name="password"
            value={password}
          />
        </FormField>

        <FormField>
          <TextInput 
            onChange={e => onChange(e)}
            placeholder="re-enter password"
            name="password2"
            value={password2}
          />
        </FormField>
    
          <Box align="center">

          <Button 
            buttonText="Create"
            className="add-service-btn"
            type="submit"
          />
          </Box>
        </Form>
     
    </div>
  )
}
CreateEmployee.propTypes = {

}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth
})
export default connect(mapStateToProps, {createEmployee, setAlert, loadUser})(CreateEmployee)
