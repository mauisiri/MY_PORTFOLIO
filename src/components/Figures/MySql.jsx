import React from 'react'
import './Figure.css'
import icon_mysql from '../../assets/icons/icon_mySql.png'

const MySql = () => {
    return (
        <> 
            <div className='icon_text'>
              <img className='variant' src={icon_mysql} alt=' '/>
              <span className='lang_name'>MySQL</span>
            </div>
        </>
    )
}

export default MySql