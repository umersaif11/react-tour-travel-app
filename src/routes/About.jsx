import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImage from '../assets/night.jpg'
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <Navbar/>
      <Hero
      cName='hero-mid'
      heroImg={AboutImage}
      title='About'
      url='/'
      btnClass='hide'
      />
      <Footer/>
    </>
  )
}

export default About