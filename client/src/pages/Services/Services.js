import React, { useEffect } from 'react'
import './Services.css'
import { Link } from 'react-router-dom'
import { Box } from 'grommet'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getServices} from '../../actions'



const Services = ({ getServices, service: { services, loading }, user: { user } }) => {
   useEffect(() => {
     getServices()
    }, [getServices])
  


  // Dry this up!!!
    
  let addService;
  if (!user.employee === true) {
    addService =  <div><Link className="add-service" to="/services/new"> Add a Service</Link></div>
  } else {
    addService = null

  }

   let allServices = services.map(service => {
      return(
        <div className="service-cards" key={service._id}>
          <header className="card-header">
            <h2>{service.category}</h2>
          </header>
            <h3>{service.name}</h3>
            <h3>${service.price}</h3>
        </div>
      )
    })  

  return (
    <div className="container">
      <Box
        align="center"
      >
        <h1 className="title">Services</h1>
      </Box>
      {allServices}

    <div>

      {addService}
    </div>
     
    </div>
  )
}

Services.propTypes = {
  getServices: PropTypes.func.isRequired,
  service: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
  service: state.service,
  user: state.auth
})
export default connect(mapStateToProps, { getServices })(Services)
