import React, { useState, Fragment} from 'react'
import styled  from 'styled-components'
import { Box, FormField, TextInput, Button, Form, Image} from 'grommet';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAlert, register } from '../../actions'
import PropTypes from 'prop-types'
import Alert from '../layout/Alert'

const LoginContainer = styled.div `
  min-width: 300px;
  width: 30%;
  padding: 10px;
  height: 50%;
  margin: 100px 300px;
  border: 1px solid #E6E6E6;
  border-radius: 10px;
  background: white;
  border-bottom: 20px solid #dc7f9b;
`
const InputContainer = styled.div `
  background: white;
  border-radius: 8px;
  padding: 20px;

`




const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  }

   if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <Fragment>

    <Box align="center" style={{ background: '#fafafa' }}>
      <LoginContainer>
        <InputContainer>
          <Box align="center">
            <h3>Salon Tickets</h3>
          </Box>
          <Form onSubmit={e => onSubmit(e)}>

            <FormField label="name">
              <TextInput
                type="text"
                name="name"
                value={name}
                onChange={e => onChange(e)}
              />
            </FormField>

            <FormField label='email'>
            <TextInput
              type="email"
              name="email"
              value={email}
              onChange={e => onChange(e)}
            />
          </FormField>

          <FormField label='password'>
            <TextInput
              type="password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
            />
          </FormField>

          <FormField label='re-enter password'>
            <TextInput
              type="password"
              name="password2"
              value={password2}
              onChange={e => onChange(e)}
            />
          </FormField>
           <Alert />
          <Button type="submit" alignSelf="end" label="Submit" />
          </Form>
       

        </InputContainer>
      
            <h3 style={{ color: 'black'}}>already have an account?  <Link style={{ color: 'black'}} to="/">sign in</Link></h3>
          
          
      </LoginContainer>
    </Box>
    </Fragment>
  )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register)