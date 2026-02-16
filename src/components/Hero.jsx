import React from 'react'
import './HeroStyles.css'
function Hero({cName, heroImg, title, text}) {
  return (
    <>
        <div className={cName}>
            <img src={heroImg} alt="HeroImage" />
            <div className='hero-text'>
                <h1>{title}</h1>
                <p>{text}</p>
                <a href="/">Travel Plan</a>
            </div>
        </div>
    </>
  )
}

export default Hero