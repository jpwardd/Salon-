import React from 'react';
import Image from '../Image'
import { Link } from 'react-router-dom'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './navbar.css'




const NavBar = (props) => {
  const logoURL = "https://lh3.googleusercontent.com/3YacEv8WexsZYghMy96Qvt9DLKvs_xs2JaAYdh7oDxBriADfxCAPFlQ5x5H8aYpZMJeF52UzZ1RGpNDK6bewHkMUvSVT7e08i4E2C6gJFin6Nsys1Oni8XUcEQlUxJ8B7XAaV8MMI0Ecy-2-mZvHJWrw5oI6QdMRERcgwGgNNW99muE6AWkiFyfrexsSnGKstjE3vDPkx9PiCKoLCgLkXq_9HGYHxLUHysXOzoYlMQI6hLZj7I5pr0K5mOXJvX1k3IXRH7XHISIvpKKqNuZpYsQNoIq7LzhaWAqGotuynbGNEF3FoR2SixgVN0Jp2Onjvys7PodT2nlwXX5FY2CNDYpb36k95i68Zm2hkW6NDAuq_xIwMAK7hGyzrw86q0O0liQyR8eek5Snflbs0ZElQuMt2rFKnFrnuYiKjg6-jyWiM8tf1Hi19s6rBgYmc9WA1hbhsLDW1AfmCkFveGIG3cvtuN4jBIL3n3-HGivYw_TnfyYSV5TMK-69cWkFdTL9FDFGkCM19As3U6rd_NJ4W_K4sguM9QkTQiBwaRW2Vb7UwiC1-DN6ShZlbgz3tOLEC-9K_W0a5MXsGfzzz7NA-7QiT19g7CtYKXHdVDA1ehlw8GPsjyRLyddUGQX2aGVnTqH0-w103wuevMMMSatePbEmJXrFR5k=s750-no"
  return (
    <header className="navbar-container">

        <nav className="navbar-navigation">
          <div className="navbar-toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
          </div>
          <div className="company-logo">

            <Link to="/dashboard"><Image source={logoURL} /></Link>
          </div>

          <div className="spacer" />
          
          <div className="navbar-navigation-items">
            <ul>
              <Link to="/services">services</Link>
              <Link to="/employees">employees</Link>
              <Link to="/contacts">contacts</Link>
            </ul>
          </div>
        </nav>
        
    </header>
       
          
  
  
  )
}

export default NavBar
