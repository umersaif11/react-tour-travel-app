import "./DestinationStyles.css"
import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/3.jpg"
import Mountain4 from "../assets/4.jpg"
import React from 'react'

function DestinationItem({
    heading,
    text,
    img1,
    img2,
    cName
}) {
  return (
    <div className={cName}>
        <div className='des-text'>
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
        <div className='image'>
            <img 
            src={img1} 
            alt="Mountain Image One" 
            />
            <img 
            src={img2} 
            alt="Mountain Image Two" 
            />
        </div>
    </div>
  )
}

export default DestinationItem