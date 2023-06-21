import React, { useState } from 'react'
import './Home.css'
import { motion } from 'framer-motion'
import profile_pic from '../../assets/personalPic/profile_pic.png'


const Home = () => {
  const transition = { type: 'spring', duration: 2 }

  return (
    <>
      <div className='main' id='home'>
        <div className="left_side">
          <div className="my_app_text">
            <div>
              <span className="stroke_text">I am </span>
              <div>
                <span className="my_name">Iris Leo</span>
                <span className="stroke_text">, </span>
              </div>
            </div>

            <div>
              <span className="subtitle">Software Developer</span>
            </div>

            <div>
              <span className='quote'>"All progress takes place outside the comfort zone"</span>
            </div>
          </div>

          <div className="with_btn">

            <button className="btn_contact_me"></button>

            <div className="contact_me"> 
              <motion.div
                initial={{ left: '100px' }}
                whileInView={{ left: '8px' }}
                transition={{ ...transition, type: 'tween' }}
              ></motion.div>
              <span>Contact</span>
              <p>me</p>
            </div>
          </div>
        </div>

        <div className="right_side">
          <img className='profile_pic' src={profile_pic} alt=' ' />
        </div>
      </div>
    </>
  )
}

export default Home