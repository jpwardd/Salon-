import React, { useState, Fragment} from 'react'
import styled  from 'styled-components'
import { Box, FormField, TextInput, Button, Form, Image} from 'grommet';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAlert, login } from '../../actions'
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




const Login = ({ setAlert, login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  }

  // Redirect if logged in
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

            <FormField label="email">
              <TextInput
                type="text"
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

        
          <Button type="submit" alignSelf="end" label="Submit" />
          </Form>
       

        </InputContainer>
      
            <h3 style={{ color: 'black'}}>need an account?  <Link style={{ color: 'black'}} to="/register">sign up</Link></h3>
          
          
      </LoginContainer>
    </Box>
    </Fragment>
  )
}

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, { setAlert, login })(Login)