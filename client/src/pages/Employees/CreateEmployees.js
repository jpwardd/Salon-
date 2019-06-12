import React, { useState, useEffect } from 'react'

import { Form, Box, TextInput, Select, FormField } from 'grommet'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Button from '../../components/Button'
import { setAlert, createEmployee, loadUser } from '../../actions'


const CreateEmployee = ({loadUser, createEmployee, setAlert, history}) => {
   useEffect(() => {
     loadUser()
   }, [loadUser])

  
   const [formData, setFormData] = useState({
     name: '',
     email: '',
     password: '',
     password2: ''
   });

  const { name, email, password, password2} = formData
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();

    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      createEmployee({ name, email, password });
      history.push('/dashboard')
    }
  }
  
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
