import React, { useState } from 'react'
import Content from './Content'
import './index.css'

import NavBar from '../../components/layout/NavBar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';



const Dashboard = () => {

  const [toggle, setToggle] = useState(false)


  const drawerClickHandler = () => {
    setToggle(!toggle)
  }

  const backdropClickHandler = () => {
    setToggle(!toggle)
  }

  let backdrop;

  if (toggle) {
    backdrop = <Backdrop click={backdropClickHandler} />
  }

  return (
    <div className="container">
      <NavBar drawerClickHandler={drawerClickHandler} />
     <SideDrawer show={toggle} />
     {backdrop}
      <main className="content">
        <Content />
      </main>
    </div>


  

  
     





  )
}

export default Dashboard
