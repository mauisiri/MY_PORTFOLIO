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

                    onClick={() => setMenuOpened(true)}
                >


                    <img src={Bars} alt="" />
                </div>
            ) : (
                <ul className='header_menu'>
                    <li onClick={() => setMenuOpened(false)} className='bar_home'>
                        <Link to='home'
                            span={true}
                            smooth={true}
                        >Home</Link>
                    </li>

                    <li onClick={() => setMenuOpened(false)} className='bar_projects'>
                        <Link to='projects'
                            span={true}
                            smooth={true}
                        >Projects & Skills</Link>
                    </li>
{/* 
                    <li onClick={() => setMenuOpened(false)} className='bar_experience'>
                        <Link to='experience'
                            span={true}
                            smooth={true}
                        >Experience</Link>
                    </li>
                    <li onClick={() => setMenuOpened(false)} className='bar_formation'>
                        <Link to='formation'
                            span={true}
                            smooth={true}
                        >Formation</Link>
                    </li>
                    <li onClick={() => setMenuOpened(false)} className='bar_about_me'>
                    <Link to='about_me'
                        span={true}
                        smooth={true}
                        >About me</Link>
                    </li>
                     */}
                    <li onClick={() => setMenuOpened(false)} className='bar_contact'>
                    <Link to='contact'
                        span={true}
                        smooth={true}
                        >Contact</Link>
                    </li>
                </ul>
            )}

        </div>
    )
}

export default Header