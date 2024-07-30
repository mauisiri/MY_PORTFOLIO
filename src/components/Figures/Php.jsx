import React from 'react'
import './Figure.css'
import icon_php from '../../assets/icons/icon_php.png'

const Php = () => {
    return (
        <> 
            <div className='icon_text'>
              <img className='variant' src={icon_php} alt=' '/>
              <span className='lang_name'>PHP</span>
            </div>
        </>
    )
}

export default Php