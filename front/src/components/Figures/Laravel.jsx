import React from 'react'
import './Figure.css'
import icon_laravel from '../../assets/icons/icon_laravel.png'

const Laravel = () => {
    return (
        <> 
            <div className='icon_text'>
              <img className='lang_icon' src={icon_laravel} alt=' '/>
              <span className='lang_name'>Laravel</span>
            </div>
        </>
    )
}

export default Laravel