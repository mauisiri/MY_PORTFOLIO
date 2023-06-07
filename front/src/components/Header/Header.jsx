import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div>   
            <ul className='header_menu'>
                <li className='about'> Home
                </li>
                <li className='skills'> Skills
                </li>
                <li className='experience'> Experience
                </li>
                <li className='formation'> Formation
                </li>
                <li className='formation'> About me
                </li>
            </ul>
        </div>
    )
}

export default Header