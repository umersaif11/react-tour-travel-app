import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImage from '../assets/night.jpg'

function About() {
  return (
    <>
      <Navbar/>
      <Hero
      cName='hero-mid'
      heroImg={AboutImage}
      title='Your Journey Your Story'
      text='Choose Your Favourite Destination'
      buttonText='Travel Plan'
      url='/'
      btnClass='show'
      />
    </>
  )
}

export default About