import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import NatureImage from '../assets/12.jpg'
function Home() {
  return (
    <>
      <Navbar/>
      <Hero
      cName='hero'
      heroImg={NatureImage}
      title='Your Journey Your Story'
      text='Choose Your Favourite Destination'
      />
    </>
  )
}

export default Home