import React from 'react'
import './Home.css'
import Html5 from '../Figures/Html5'
import Css from '../Figures/Css'
import Js from '../Figures/Js'
import React_i from '../Figures/React_i'
import Node from '../Figures/Node'
/* import profile_pic from '../../assets/personalPic/profile_IrisLeo.png' */

const Home = () => {
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
    <div></div>
    <span>Contact</span>
    <p>me</p>
  </div>
</div>

<div className="right_side">
  {/* <img className='profile_pic' src={profile_pic} alt=' '/> */}
</div>
</div>
</>
)
}

export default Home