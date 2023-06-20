import React, { useState } from 'react'
import './Header.css'
import Bars from '../../assets/icons/icon_menu.png'

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false)

    return (
        <div className='main_header'>

            {menuOpened === false && mobile === true ? (
                <div>
                    <img src={Bars} alt="" />
                </div>
            ) : (
                <ul className='header_menu'>
                    <li className='about'> Home
                    </li>
                    <li className='experience'> Projects & Skills
                    </li>
                    <li className='experience'> Experience
                    </li>
                    <li className='formation'> Formation
                    </li>
                    <li className='formation'> About me
                    </li>
                </ul>
            )}

        </div>
    )
}

export default Header