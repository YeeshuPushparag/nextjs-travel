import React from 'react'

const ContactContainer = () => {
  return (
    <div className="contact-container">
    <h2>Contact Us</h2>
    <div className='contact-form'>
      <input type="text" placeholder="enter your name" />
      <input type="email" placeholder="enter your email" />
      <textarea name="" id="" cols="30" rows="10" placeholder="enter your message"></textarea>
      <button>Send Message</button>
      </div> 
    
    </div>
  )
}

export default ContactContainer