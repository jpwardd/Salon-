import React, { useEffect } from 'react'
import './Services.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getServices} from '../../actions'


const Services = ({ getServices, setAlert, service: { services, loading} }) => {
   useEffect(() => {
    
     getServices()
    }, [getServices])

   
  return (
    <div className="container">

        <h3>Services</h3>
        <Link to="/services/new">
          Add A New Service
        </Link>
        {services.map(service => (
          <div className="services" key={service._id}>
            <h3 key={service._id}>{service.name}</h3>
          </div>
        ))}
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
