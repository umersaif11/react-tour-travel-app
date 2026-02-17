import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImage from '../assets/night.jpg'

function Service() {
  return (
   <>
      <Navbar/>
      <Hero
      cName='hero-mid'
      heroImg={AboutImage}
      title='Service'
      url='/'
      btnClass='hide'
      />
    </>
  )
}

export default Service