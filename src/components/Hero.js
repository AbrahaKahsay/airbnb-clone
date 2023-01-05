import React from 'react'
import Grid from "../images/Group-grid2.png"

export const Hero = () => {
  return (
    <section className='hero'>
        <img src={Grid} alt='grid' className='hero--photo'/>
        <h1 className='hero--header'>Online Experiences</h1>
        <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}
