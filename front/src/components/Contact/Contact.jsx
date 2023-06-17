import React from 'react'
import './Contact.css'



const Contact = () => {
  return (
    <div className='contact'>
        <hr></hr>
        <span className='header'>CONTACT</span>
        <div className='content'>
            <span>BY PHONE
                    <li>+34 747-44-20-20</li>
                    <li>Spain</li>
                    <li>Also WhatsApp</li>
                   
            </span>

            <span>BY MAIL     
                    <li>irisleo.com@gmail.com</li>
            </span>

            <span>MORE OPTIONS
                    <li>LinkedIn</li>
                    <li>GitHub</li>

            </span>
        </div>
    </div>
  )
}

export default Contact
