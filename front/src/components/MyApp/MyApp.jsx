import React from 'react'
import './MyApp.css'
import Header from '../Header/Header'
import Figure from '../Figure/Figure'

const MyApp = () => {
  return (
    <div className='myApp'>
      <div className="left_side">
        <Header />
        <div className="the_best_app">
          <div></div>
          <span>the best app in the town</span>
        </div>

        <div className="my_app_text">
          <div>
            <span className="stroke_text">I am </span>
            <span className="my_name">Iris Leo</span>
          </div>
          
          <div>
            <span className="subtitle">Software Developer</span>
          </div>

          <div>
            <span>All progress takes place outside the comfort zone</span> 
          </div>
        
        </div>

        <div className="figures">
          <Figure />
        </div>
      </div>
    </div>
  )
}

export default MyApp