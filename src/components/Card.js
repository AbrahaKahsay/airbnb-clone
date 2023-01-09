import React from 'react'

import Image1 from "../images/image1.png"
import Star1 from "../images/Star1.png"
import Elipse from "../images/Ellipse6.png"

export const Card = () => {
  return (
    <section>
      <img src={Image1} alt="card-pic-1" />
      <div>
        <img src={Star1} alt="star"/>
        <span>5.0</span>
        <span>(6)</span>
        <span><img src={Elipse} alt="elipse"/></span>
        <span>USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><strong>From $136</strong> / person</p>
    </section>
  )
}
