import './ContactFormStyles.css' 
import React from 'react'

function ContactForm() {
  return (
    <div className='form-container'>
        <h1>Send a message to us!</h1>
        <form>
            <input 
            type="text" 
            placeholder='Name'
            />
        </form>
    </div>
  )
}

export default ContactForm