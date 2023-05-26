import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div>   
            <ul className='header_menu'>
                <li className='about'> About me
                </li>
                <li className='skills'> Skills
                </li>
                <li className='experience'> Experience
                </li>
                <li className='formation'> formation
                </li>
            </ul>
        </div>
    )
}

export default Header