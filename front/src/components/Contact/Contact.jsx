import React from 'react'
import qr_code from '../../assets/qr_code.png'
import './Contact.css'
import call_icon from '../../assets/icons/icon_call.svg'
import mail_icon from '../../assets/icons/icon_mail.svg'
import web_icon from '../../assets/icons/icon_web.svg'
import in_icon from '../../assets/icons/icon_in.svg'
import git_icon from '../../assets/icons/icon_gitHub.svg'





const Contact = () => {


  return (
    <div className='contact' id='contact'>
      <hr></hr>
      <span className='header'>CONTACT</span>
      {/* <span className='header' ref={contactSection}>CONTACT</span> */}
      <div className='content'>

        <div className="contact_container">
          <img className='qu_code' src={call_icon} alt=' ' />
          <span>BY PHONE
            <li>+34 - 747 44 20 20</li>
            <li><a className='whatsApp' href=" https://wa.link/iuoipv" target="_blank"> WhatsApp me</a></li>
            <li>
              <img className='qu_code' src={qr_code} alt=' ' />
            </li>
          </span>
        </div>

        <div className="contact_container">
          <img className='qu_code' src={mail_icon} alt=' ' />
          <span>BY MAIL
            <li>irisleo.com@gmail.com</li>
          </span>
        </div>

        <div className="contact_container">
          <img className='qu_code' src={web_icon} alt=' ' />
          <span>MORE OPTIONS
            <div classname="contact_icon_box">
              <li><a href="https://www.linkedin.com/in/irisleo/" target="_blank">
                <img classname="contact_icon" src={in_icon} alt="LinkedIn"
                width="35"  
                height="35"
                ></img>
              </a></li>
              <li><a href="https://github.com/mauisiri" target="_blank">
                <img classname="contact_icon" src={git_icon} alt="GitHub"
                width="50"  
                height="50"
                ></img>
              </a></li>
            </div>
          </span>
        </div>

      </div>
    </div >
  )
}

export default Contact
