import React, { Fragment } from 'react';
import Image from '../Image'
import { Link } from 'react-router-dom'
import { Box } from 'grommet'
import Button from '../Button'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './navbar.css'
import { logoutUser } from '../../actions'
import { connect } from 'react-redux'



const NavBar = ({ auth: { isAuthenticated, loading }, drawerClickHandler, logoutUser}) => {

 
  const authLinks = (
    <Fragment>

     <div className="navbar-navigation-items">
        <ul>
          <Link to="/dashboard">Home</Link>
          <Link to="/open-tickets">Tickets</Link>
          <Link to="/services">Services</Link>
          <Button buttonText='logout' className="logout-button" onClick={logoutUser}/>
        </ul>

      </div>
      <div className="navbar-toggle-button">
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
    </Fragment>
  )

  const logoURL = "https://lh3.googleusercontent.com/3YacEv8WexsZYghMy96Qvt9DLKvs_xs2JaAYdh7oDxBriADfxCAPFlQ5x5H8aYpZMJeF52UzZ1RGpNDK6bewHkMUvSVT7e08i4E2C6gJFin6Nsys1Oni8XUcEQlUxJ8B7XAaV8MMI0Ecy-2-mZvHJWrw5oI6QdMRERcgwGgNNW99muE6AWkiFyfrexsSnGKstjE3vDPkx9PiCKoLCgLkXq_9HGYHxLUHysXOzoYlMQI6hLZj7I5pr0K5mOXJvX1k3IXRH7XHISIvpKKqNuZpYsQNoIq7LzhaWAqGotuynbGNEF3FoR2SixgVN0Jp2Onjvys7PodT2nlwXX5FY2CNDYpb36k95i68Zm2hkW6NDAuq_xIwMAK7hGyzrw86q0O0liQyR8eek5Snflbs0ZElQuMt2rFKnFrnuYiKjg6-jyWiM8tf1Hi19s6rBgYmc9WA1hbhsLDW1AfmCkFveGIG3cvtuN4jBIL3n3-HGivYw_TnfyYSV5TMK-69cWkFdTL9FDFGkCM19As3U6rd_NJ4W_K4sguM9QkTQiBwaRW2Vb7UwiC1-DN6ShZlbgz3tOLEC-9K_W0a5MXsGfzzz7NA-7QiT19g7CtYKXHdVDA1ehlw8GPsjyRLyddUGQX2aGVnTqH0-w103wuevMMMSatePbEmJXrFR5k=s750-no"
  return (
     <Box>
    <header className="navbar-container">

        <nav className="navbar-navigation">
        
          <div className="company-logo">

            <Link to="/dashboard"><Image source={logoURL} /></Link>
          </div>

          <div className="spacer" />
         { !loading && <Fragment>{isAuthenticated && authLinks}</Fragment>}
        </nav>
        
    </header>
    </Box>
       
          
  
  
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { logoutUser })(NavBar)
