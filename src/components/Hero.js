import React from 'react'
import Grid from "../images/Group-grid2.png"

export const Hero = () => {
  return (
    <div>
        <div className='grid'>
            <img src={Grid} alt='grid'/>
        </div>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
   
  )
}
