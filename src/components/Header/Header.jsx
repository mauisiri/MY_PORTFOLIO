import React, { useState } from 'react';
import './Header.css';
import Bars from '../../assets/icons/icon_menu.png';
import CloseBars from '../../assets/icons/icon_menu_close.png';
import { Link } from "react-scroll";

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);


    return (
        <div className='main_header'>

            {menuOpened === false && mobile === true ? (
                <div className='bar_menu'
                    onClick={() => setMenuOpened(true)}
                >
                    <img src={Bars} alt="" />
                </div>
            ) : (

                <div>
                    <div className='hamburger_menu'>
                        <img onClick={() => setMenuOpened(false)} className='bar_menu_close' src={CloseBars} alt="" />
                    </div>

                    <ul className='header_menu'>
                        <li>
                            <Link
                                onClick={() => setMenuOpened(false)}
                                activeClass="active"
                                to='home'
                                spy={true}
                                smooth={true}
                            >Home</Link>
                        </li>

                        <li>
                            <Link
                                onClick={() => setMenuOpened(false)}
                                activeClass="active"
                                to='projects'
                                spy={true}
                                smooth={true}
                            >Projects & Skills</Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setMenuOpened(false)}
                                activeClass="active"
                                to='interaction'
                                spy={true}
                                smooth={true}
                            >
                                Interact with
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setMenuOpened(false)}
                                activeClass="active"
                                to='contact'
                                spy={true}
                                smooth={true}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}

        </div>
    )
}

export default Header