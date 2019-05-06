import React from 'react'
import NavBar from './layout/NavBar'
import { Heading, Grommet, Button } from 'grommet'
import { Notification } from 'grommet-icons';

const Dashboard = () => {
  return (
    <div>
      <NavBar>
        <Heading level='3' margin='none'>Salon Tickets</Heading>
+   <Button icon={<Notification />} onClick={() => {}} />
      </NavBar>
    </div>
  )
}

export default Dashboard
