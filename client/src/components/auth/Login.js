import React, { useState, Fragment} from 'react'
import styled  from 'styled-components'
import { Box, FormField, TextInput, Form } from 'grommet';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAlert, login } from '../../actions'
import PropTypes from 'prop-types'
import Alert from '../layout/Alert'
import Button from '../Button'
import Image from '../Image'
import { media, logoURL} from '../../media'

const LoginContainer = styled.div `
  background-color: #ffffff;
  padding: 10px;
  margin-top: 50px;
  border: 1px solid black;
  margin-top: 150px;
  ${media.desktop`
    width: 30%;
  `
  }
  ${media.tablet`
    width: 90%;
  `
  }
  ${media.phone`
    width: 90%;
  `
  }
 
`
const InputContainer = styled.div `
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  img {
    width: 200px;
    height: 200px;
  }

`

const NeedAccount = styled.div`
  border: 1px solid black;
  margin-top: 20px;
  margin: 20px;
  padding: 10px;
  background-color: #ffffff;
  border-bottom: 20px solid black;

  ${media.desktop`
    width: 30%;
  `
  }
  ${media.tablet`
    width: 90%;
  `
  }
  ${media.phone`
    width: 90%;
  `
  }

  h3 {
    color: #AAAAAA;
    text-align: center;
  }
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
    if (email === '') {
      setAlert('Please enter your email', 'danger')
    } 

    if (password === '') {
      setAlert('Please enter your password', 'danger')
    }
    login(email, password);
  }

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }


  return (
    <Fragment>
      <Box 
        align="center"
      >
        <LoginContainer>
          <InputContainer>
            <Box align="center">
              <Image source={logoURL} alt="Salon Industria Logo"/>
              <h3>Ticket Manager</h3>
            </Box>
            <Form onSubmit={e => onSubmit(e)}>

              <FormField>
                <TextInput
            
                  plain={false}
                  placeholder="email"
                  type="text"
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
                />
              </FormField>

              <FormField>
              <TextInput
                placeholder="password"
                type="password"
                name="password"
                value={password}
                onChange={e => onChange(e)}
              />
            </FormField>

            <Button 
              buttonText="Login"
              style={{ width: '100%', height: 40, backgroundColor: 'black', color: 'white', fontSize: 18}}
              type="submit"
            />
             <Alert />
            </Form>
          </InputContainer>
        </LoginContainer>
  

      </Box>
      <Box 
        align="center"
    
      >
        <NeedAccount>
          <h3>Don't have an account?  <Link style={{ color: '#dc7f9b', textDecoration: 'none'}} to="/register">sign up</Link></h3>
        </NeedAccount>
   
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