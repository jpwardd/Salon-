import React, { useState, Fragment} from 'react'
import styled  from 'styled-components'
import { Box, FormField, TextInput, Form } from 'grommet';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAlert, register } from '../../actions'
import PropTypes from 'prop-types'
import Alert from '../layout/Alert'
import { media, logoURL} from '../../media'
import Button from '../Button'
import Image from '../Image'

const Container = styled.div `
  background-color: #ffffff;
  padding: 10px;
  margin-top: 50px;
  border: 1px solid black;
  ${'' /* box-shadow: 0 2px 5px 0 rgba(0,0,0,.26); */}
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

const RegisterOrLogin = styled.div`
  border: 1px solid black;
  margin-top: 20px;
  margin: 20px;
  padding: 10px;
  background-color: #ffffff;
  border-bottom: 20px solid black;
  ${'' /* box-shadow: 0 2px 5px 0 rgba(0,0,0,.26); */}
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
      <Container>
        <InputContainer>
          <Box align="center">
            <Image source={logoURL} alt="Salon Industria Logo"/>
            <h3>Salon Tickets</h3>
          </Box>
          <Form onSubmit={e => onSubmit(e)}>

            <FormField>
              <TextInput
                type="text"
                name="name"
                placeholder="name"
                value={name}
                onChange={e => onChange(e)}
              />
            </FormField>

            <FormField>
            <TextInput
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={e => onChange(e)}
            />
          </FormField>

          <FormField>
            <TextInput
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={e => onChange(e)}
            />
          </FormField>

          <FormField>
            <TextInput
              type="password"
              name="password2"
              placeholder="re-enter password"
              value={password2}
              onChange={e => onChange(e)}
            />
          </FormField>
           <Button 
              buttonText="Register"
              style={{ width: '100%', height: 40, backgroundColor: 'black', color: 'white', fontSize: 18}}
              type="submit"
            />
           <Alert />

          </Form>
       

        </InputContainer>
      
          
      </Container>
          <RegisterOrLogin>
            <h3>already have an account?  <Link style={{ color: '#dc7f9b', textDecoration: 'none'}} to="/">sign in</Link></h3>
          </RegisterOrLogin>
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