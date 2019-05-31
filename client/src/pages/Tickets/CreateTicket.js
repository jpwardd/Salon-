import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTicket, setAlert, getClients, getServices } from '../../actions';
import { Form, FormField, TextArea, TextInput, Select, CheckBox } from 'grommet';
import styled from 'styled-components';
import Button from '../../components/Button'

const FormContainer = styled.div `
   width: 75%;
   border: 1px solid black;
   padding: 20px;
`


const CreateTicket = ({ createTicket, setAlert, getClients, getServices }) => {
  useEffect(() => {
    getServices()
    getClients()
  }, [getServices, getClients])

  const [ticketData, setTicketData] = useState({
    services: '',
    client: '',
    bookingInfo: '',

  })

  const {client, bookingInfo, services} = ticketData;

  const onChange = e => setTicketData({ ...ticketData, [e.target.name]: e.target.value })
 
  const onSubmit = async e => {
    e.preventDefault();
    if (services === '') {
      setAlert('Services are required', 'danger')
    }

    if (client === '') {
      setAlert('Please add a contact', 'danger')
    }
    

    createTicket(services, client, bookingInfo)
  }

  

  return (
    <FormContainer>
      <h3>Add A Service</h3>
       <Form onSubmit={e => onSubmit(e)}>
         <TextInput 
          onChange={e => onChange(e)}
          placeholder="services"
          name="services"
          value={services}
        />
 
        <TextInput 
          onChange={e => onChange(e)}
          placeholder="client"
          name="client"
          value={client}
        />
 
        <TextArea 
          onChange={e => onChange(e)}
          placeholder="booking information"
          name="bookingInfo"
          value={bookingInfo}
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

CreateTicket.propTypes = {

}

const mapStateToProps = state => ({
  service: state.service,
  client: state.client
})
export default connect(mapStateToProps, { createTicket, setAlert, getClients, getServices })(CreateTicket)
