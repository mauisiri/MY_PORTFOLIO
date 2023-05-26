import React from 'react'
import './MyApp.css'
import Header from '../Header/Header'
import Html5 from '../Figures/Html5'
import Css from '../Figures/Css'
import Js from '../Figures/Js'
import React_i from '../Figures/React_i'
import Node from '../Figures/Node'

const MyApp = () => {
  return (
    <div className='myApp'>
      <div className="left_side">
        <Header />
      
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
            <span className='line'>All progress takes place outside the comfort zone</span> 
          </div>
        </div>

        <div className="languages_box">
          <Html5 />
          <Css />
          <Js />
          <React_i/>
          <Node/>
        </div>

        <div className="the_best_app">
          <div></div>
          <span>Check my formation</span>
        </div>

      </div>
    </div>
  )
}

export default MyApp