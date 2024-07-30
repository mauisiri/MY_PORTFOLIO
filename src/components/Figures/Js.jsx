import React from 'react'
import './Figure.css'
import icon_js from '../../assets/icons/icon_js.png'

const Js = () => {
    return (
        <> 
            <div className='icon_text'>
              <img className='lang_icon' src={icon_js} alt=' '/>
              <span className='lang_name'>JS</span>
            </div>
        </>
    )
}

export default Js