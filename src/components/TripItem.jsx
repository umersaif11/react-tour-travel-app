import React from 'react'
import "./TripStyles.css"

function TripItem({
    image,
    heading,
    text
}) {
  return (
    <div className='t-card'>
        <div className='t-image'>
            <img src={image} alt="Trip-Image" />
        </div>
        <h4>{heading}</h4>
        <p>{text}</p>
    </div>
  )
}

export default TripItem