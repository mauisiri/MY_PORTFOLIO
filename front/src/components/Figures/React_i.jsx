import React from 'react'
import './Figure.css'
import icon_react from '../../assets/icons/icon_react.png'

const React_i = () => {
    return (
        <> 
            <div className='icon_text'>
              <img className='lang_icon' src={icon_react} alt=' React ' />
              <span className='lang_name'>React</span>
            </div>
        </>
    )
}

export default React_i