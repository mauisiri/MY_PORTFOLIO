import React from 'react'
import qr_code from '../../assets/qr_code.png'
import './Contact.css'



const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <hr></hr>
        <span className='header'>CONTACT</span>
        <div className='content'>
            <span>BY PHONE
                    <li>+34 747-44-20-20</li>
                    <li>Spain</li>
                    <li><a href=" https://wa.link/iuoipv" target=""> WhatsApp me</a></li>
                    <li>
                        <img className='qu_code' src={qr_code} alt=' '/>
                   </li>

                   
                   
            </span>

            <span>BY MAIL     
                    <li>irisleo.com@gmail.com</li>
            </span>

            <span>MORE OPTIONS
                    <li><a href="https://www.linkedin.com/in/irisleo/" target="">LinkedIn</a></li>
                    <li><a href="https://github.com/mauisiri" target="">GitHub</a></li>
                    

            </span>
        </div>
    </div>
  )
}

export default Contact
