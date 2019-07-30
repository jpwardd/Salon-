import React, { useEffect } from 'react'
import './Services.css'
import { Link } from 'react-router-dom'
import { Box } from 'grommet'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getServices, ServiceActions} from '../../actions'
import { AppState } from '../../store/store';
import { Service } from '../../store/services/types';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

type Props = IServiceProps & LinkDispatchProps & LinkStateProp

const Services: React.FC<Props> = ({ getServices, services}) => {
   useEffect(() => {
    getServices()
    }, [getServices])
  


  // Dry this up!!!
    
  // let addService;
  // if (!user.employee === true) {
  //   addService =  <div><Link className="add-service" to="/services/new"> Add a Service</Link></div>
  // } else {
  //   addService = null

  // }


 
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

    
    </div>
     
    </div>
  )
}

Services.propTypes = {
  getServices: PropTypes.func.isRequired,
}

interface IServiceProps {
 
}


interface LinkStateProp {
  services: Service[]
  loading: string
}

interface LinkDispatchProps {
  getServices: () => void
}

const mapStateToProps = (state: AppState, ownProps: IServiceProps) => {
  return({
    services: state.services.services,
    user: state.auth
    
  })
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, ServiceActions>, ownProps: IServiceProps): LinkDispatchProps => ({
  getServices: bindActionCreators(getServices, dispatch)
})




export default connect(mapStateToProps, mapDispatchToProps )(Services)
