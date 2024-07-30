import React from 'react'
import './Figure.css'
import icon_html from '../../assets/icons/icon_html.png'

const Html5 = () => {
    return (
        <>
            <div className='icon_text'>
              <img className='lang_icon' src={icon_html} alt=' '/>
              <span className='lang_name'>HTML5</span>
            </div>
        </>
    )
}

export default Html5