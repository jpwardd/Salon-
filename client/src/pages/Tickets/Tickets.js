import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getTickets, getEmployees} from '../../actions'
import { Link } from 'react-router-dom'
import { Box, Button} from 'grommet'
import PropTypes from 'prop-types'
import Card from '../../components/Card'

import './Tickets.css'


const Tickets = ({getTickets, getEmployees, ticket: { tickets }, employee: { employees }}) => {
  useEffect(() => {
    getTickets()
    getEmployees()
  }, [getTickets, getEmployees])

  const [ticketData, setTicketData] = useState({
    completed: false
  })

  const completedTickets = e => setTicketData({ ...ticketData, completed: true })

  console.log(ticketData)

  let allTickets = tickets.map(ticket => {
      return (
        <Box key={ticket._id} className="ticket-wrapper">
       <div className="tickets">
          <h2>Client</h2>
          <h4>{ticket.client}</h4>
          <hr />
          <h2>services</h2>
          <h4>{ticket.service}</h4>
          <Box align="end">
            <Button color="black" label="Done" onClick={e => completedTickets(e)} />
          </Box>
       </div>
      </Box>
    )
  })
  
  return (
    <div className="ticket-container">
    <Box align="center" className="page-title-container">
      <h1 className="ticket-title">Open Tickets</h1>
      <Link className="new-ticket-link" to="/tickets/create">New Ticket</Link>
    </Box>
      {allTickets}
    </div>
  )
}

Tickets.propTypes = {
  getTickets: PropTypes.func.isRequired,
  getEmployees: PropTypes.func.isRequired,
  
}

const mapStateToProps = state => ({
  ticket: state.ticket,
  employee: state.employee
})

export default connect(mapStateToProps, { getTickets, getEmployees })(Tickets)
