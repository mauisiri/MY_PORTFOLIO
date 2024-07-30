import React from 'react'
import './Figure.css'
import icon_node from '../../assets/icons/icon_node.png'

const Node = () => {
    return (
        <> 
            <div className='icon_text'>
              <img className='variant' src={icon_node} alt=' '/>
              <span className='lang_name'>Node</span>
            </div>
        </>
    )
}

export default Node