import React from 'react'
import './Home.css'
import {motion} from 'framer-motion'
import profile_pic from '../../assets/personalPic/profile_pic.png'

const Home = () => {
    const transition = {type: 'spring', duration : 2}

    return (
<>
<div className='main'>
<div className="left_side">
  <div className="my_app_text">
    <div>
      <span className="stroke_text">I am </span>
      <span className="my_name">Iris Leo</span>
      <span className="stroke_text">, </span>
    </div>
    
    <div>
      <span className="subtitle">Software Developer</span>
    </div>

    <div>
      <span>"All progress takes place outside the comfort zone"</span> 
    </div>
  </div>

  <div className="contact_me">
    <motion.div
    initial={ {left: '238px'} }
    whileInView={ {left: '8px'} }
    transition = {transition}

    ></motion.div>
    <span>Contact</span>
    <p>me</p>
  </div>
</div>

<div className="right_side">
   <img className='profile_pic' src={profile_pic} alt=' '/> 
</div>
</div>
</>
)
}

export default Home