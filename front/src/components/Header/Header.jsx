import React, { useState } from 'react';
import './Header.css';
import Bars from '../../assets/icons/icon_menu.png';
import { Link } from "react-scroll";

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false)

    return (
        <div className='main_header'>

            {menuOpened === false && mobile === true ? (
                <div className='bar_menu'
                
                onClick={()=> setMenuOpened(true)}
                >

                    
                    <img src={Bars} alt="" />
                </div>
            ) : (
                <ul className='header_menu'>
                    <li onClick={()=>setMenuOpened(false)}className='about'>
                        <Link>Home</Link>
                    </li>

                    <li onClick={()=>setMenuOpened(false)} className='experience'> Projects & Skills
                    </li>
                    <li onClick={()=>setMenuOpened(false)} className='experience'> Experience
                    </li>
                    <li onClick={()=>setMenuOpened(false)} className='formation'> Formation
                    </li>
                    <li onClick={()=>setMenuOpened(false)} className='formation'> About me
                    </li>
                </ul>
            )}

        </div>
    )
}

export default Header