import React from 'react'
import './Figure.css'
import icon_html from '../../assets/icons/icon_html.png'

const Figure = () => {
    return (
        <>   

          <div className='languages_box'>
            <div className='icon_text'>
              <img className='lang_icon' src={icon_html} alt='HTML5'/>
              <span className='lang_name'>html5</span>
            </div>
          </div>
           
        </>
    )
}

export default Figure