import React from 'react'
import { Link } from 'react-router-dom'
import './SideDrawer.css'

const SideDrawer = (props) => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <div>
      <nav className={drawerClasses}>
        <ul>  
           <Link to="/services">services</Link>
           <Link to="/employees">employees</Link>
           <Link to="/contacts">contacts</Link>
        </ul>
      </nav>
    </div>
  )
}

export default SideDrawer
