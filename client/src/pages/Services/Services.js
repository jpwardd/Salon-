import React, { useState, useEffect } from 'react'
import './Services.css'
import { Form, TextInput, FormField } from 'grommet'
import PropTypes from 'prop-types'
import Button from '../../components/Button'
import { connect } from 'react-redux'
import { setAlert, createService, getServices } from '../../actions'

const Services = ({createService, getServices, setAlert, service: { services, loading}}) => {
 
  const [formData, setFormData] = useState({
    name: '',
    price: ''
  })

  const { name, price } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    if (name === '') {
      setAlert('Name is required', 'danger')
    }

    if (price === '') { 
      setAlert('Price is required', 'danger')
    }
    createService(name, price)
  }

   useEffect(() => {
     getServices()
   }, [getServices])


  return (
    <div className="container">


       <div className="form-container">
      <h3>Add A Service</h3>
       <Form onSubmit={e => onSubmit(e)}>
        <FormField>
          <TextInput 
            onChange={e => onChange(e)}
            placeholder="name"
            name="name"
            value={name}
          />
        </FormField>
        <FormField>
          <TextInput 
             onChange={e => onChange(e)}
            placeholder="price"
            name="price"
            value={price}
          />
        </FormField>
        <Button 
          buttonText="add"
           style = {{ width: '100%', height: 40, backgroundColor: 'black', color: 'white', fontSize: 18}}
           type="submit"
        />
      </Form>
      </div>

        <h3>Services</h3>

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
  createService: PropTypes.func.isRequired,
  service: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
  service: state.service
})
export default connect(mapStateToProps, { setAlert, createService, getServices })(Services)
