import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Box } from 'grommet'
import Image from '../../components/Image'
import Button from '../../components/Button'



const SideNav = () => {
  const logoURL = "https://lh3.googleusercontent.com/3YacEv8WexsZYghMy96Qvt9DLKvs_xs2JaAYdh7oDxBriADfxCAPFlQ5x5H8aYpZMJeF52UzZ1RGpNDK6bewHkMUvSVT7e08i4E2C6gJFin6Nsys1Oni8XUcEQlUxJ8B7XAaV8MMI0Ecy-2-mZvHJWrw5oI6QdMRERcgwGgNNW99muE6AWkiFyfrexsSnGKstjE3vDPkx9PiCKoLCgLkXq_9HGYHxLUHysXOzoYlMQI6hLZj7I5pr0K5mOXJvX1k3IXRH7XHISIvpKKqNuZpYsQNoIq7LzhaWAqGotuynbGNEF3FoR2SixgVN0Jp2Onjvys7PodT2nlwXX5FY2CNDYpb36k95i68Zm2hkW6NDAuq_xIwMAK7hGyzrw86q0O0liQyR8eek5Snflbs0ZElQuMt2rFKnFrnuYiKjg6-jyWiM8tf1Hi19s6rBgYmc9WA1hbhsLDW1AfmCkFveGIG3cvtuN4jBIL3n3-HGivYw_TnfyYSV5TMK-69cWkFdTL9FDFGkCM19As3U6rd_NJ4W_K4sguM9QkTQiBwaRW2Vb7UwiC1-DN6ShZlbgz3tOLEC-9K_W0a5MXsGfzzz7NA-7QiT19g7CtYKXHdVDA1ehlw8GPsjyRLyddUGQX2aGVnTqH0-w103wuevMMMSatePbEmJXrFR5k=s750-no"

  return (
  
    <div> 
      <Image source={logoURL} className="company-logo" />
      <div className="link-container">
        <Button buttonText="employees" className="nav-links"/>
        <Button buttonText="hello" className="nav-links" />
        <Button buttonText="hello" className="nav-links"/>
      </div>
    </div> 
  )
}

export default SideNav
