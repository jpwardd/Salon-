import React, { useState, useEffect } from 'react'
import './Services.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from '../../components/Button'
import { connect } from 'react-redux'
import { setAlert, createService, getServices } from '../../actions'


const Services = ({createService, getServices, setAlert, service: { services, loading}}) => {
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
  service: state.service
})
export default connect(mapStateToProps, { getServices })(Services)
