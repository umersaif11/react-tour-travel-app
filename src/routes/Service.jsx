import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImage from '../assets/night.jpg'
import Footer from '../components/Footer'
import Trip from '../components/Trip'

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
      <Trip/>
      <Footer/>
    </>
  )
}

export default Service