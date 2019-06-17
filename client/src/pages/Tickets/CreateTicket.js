import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTicket, setAlert, getClients, getServices, getEmployees} from '../../actions';
import { Form, FormField, TextArea, TextInput, Box, Select } from 'grommet';
import styled from 'styled-components';
import Button from '../../components/Button'
import './CreateTicket.css'

const FormContainer = styled.div `
   width: 75%;
   border: 1px solid black;
   padding: 20px;
`


const CreateTicket = ({ history, createTicket, setAlert, getClients, getEmployees, getServices, service: {services}, client: { clients }, employee: { employees }}) => {
  useEffect(() => {
    getServices()
    getClients()
    getEmployees()
  }, [getServices, getClients, getEmployees])

  const [ticketData, setTicketData] = useState({
    service: [],
    client: '',
    employee: '',
    bookingInfo: ''
  })


  const {service, client, employee, bookingInfo} = ticketData;

  const onServiceSelectChange = e => setTicketData({ ...ticketData, service: e.value })
  
  const onClientSelectChange = e => setTicketData({ ...ticketData, client: e.value })

  const onEmployeeSelectChange = e => setTicketData( { ...ticketData, employee: e.value })
  const onChange = e => setTicketData({ ...ticketData, [e.target.name]: e.target.value })
 
  const onSubmit = async e => {
    e.preventDefault();
    if (service === '') {
      setAlert('Services are required', 'danger')
    }

    if (client === '') {
      setAlert('Please add a contact', 'danger')
    }
    

    createTicket(service, client, employee, bookingInfo)
    history.push('/dashboard');
  }

  let serviceOptions = services.map(service => {
    return service.name
  })

  let clientOptions = clients.map(client => {
    return client.firstName + " " + client.lastName
  })

  let employeeOptions = employees.map(employee => {
    return employee._id
  })
  
  return (
    <div className="ns-container">
      <Box
        align="center"
      >
      <h2 className="title">Create Ticket</h2>
      </Box>
      <Box>
        <h3 className="title">Selected Services</h3>
        {service.map(item => (
          <div key={item}>
           <h4>{item}</h4>
          </div>
        ))}
      </Box>
       <Form className="ns-form-container" onSubmit={e => onSubmit(e)}>
        <FormField>
          <Select
            placeholder="Services"
            multiple={true}
            value={service}
            onChange={e => onServiceSelectChange(e)}
            options={serviceOptions}
          />
        </FormField>

        <FormField>
         <Select 
           placeholder="Client"
           value={client}
           onChange={e => onClientSelectChange(e)}
           options={clientOptions}
         />
        </FormField>

        <FormField>
         <Select 
           placeholder="Employee"
           value={employee}
           onChange={e => onEmployeeSelectChange(e)}
           options={employeeOptions}
         />
        </FormField>
       
          <TextArea 
            onChange={e => onChange(e)}
            placeholder="booking information"
            name="bookingInfo"
            value={bookingInfo}
          />
        
        <Box
          align="center"
        >
          <Button 
            buttonText="Create"
            className="add-btn"
            type="submit"
          />
        </Box>
      </Form>
    </div>
  )
}

CreateTicket.propTypes = {

}

const mapStateToProps = state => ({
  service: state.service,
  client: state.client,
  employee: state.employee
})
export default connect(mapStateToProps, { createTicket, setAlert, getClients, getServices, getEmployees })(CreateTicket)
