import React from 'react'
import './HeroStyles.css'
import NatureImage from '../assets/12.jpg'
function Hero() {
  return (
    <>
        <div className='hero'>
            <img src={NatureImage} alt="HeroImage" />
            <div className='hero-text'>
                <h1>
                    Your Journey Your Story
                </h1>
                <p>
                    Choose Your Favourite Destination
                </p>
                <a href="/">Travel Plan</a>
            </div>
        </div>
    </>
  )
}

export default Hero