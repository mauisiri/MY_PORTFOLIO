import React from 'react'
import './Figure.css'
import icon_css from '../../assets/icons/icon_css.png'

const Css = () => {
    return (
        <> 
            <div className='icon_text'>
              <img className='lang_icon' src={icon_css} alt=''/>
              <span className='lang_name'>CSS3</span>
            </div>
        </>
    )
}

export default Css