import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SignUpImage from '../assets/4.jpg'
import Footer from '../components/Footer'

function SignUp() {
  return (
    <>
      <Navbar/>
      <Hero
      cName='hero-mid'
      heroImg={SignUpImage}
      title='Join the Adventure'
      url='/'
      btnClass='hide'
      />

      <Footer/>
    </>
  )
}

export default SignUp