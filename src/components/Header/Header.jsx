import React, { useState, useEffect } from 'react';
import './Header.css';
import Bars from '../../assets/icons/icon_menu.png';
import CloseBars from '../../assets/icons/icon_menu_close.png';
import { Link as ScrollLink } from "react-scroll";
import { useLocation } from 'react-router-dom';

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const [mobile, setMobile] = useState(window.innerWidth <= 768);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = (path) => {
        setMenuOpened(false);
        if (location.pathname !== '/') {
            window.location.href = `/${path}`;
        }
    };

    return (
        <div className='main_header'>
            {menuOpened === false && mobile ? (
                <div className='bar_menu' onClick={() => setMenuOpened(true)}>
                    <img src={Bars} alt="" />
                </div>
            ) : (
                <div>
                    <div className='hamburger_menu'>
                        <img onClick={() => setMenuOpened(false)} className='bar_menu_close' src={CloseBars} alt="" />
                    </div>

                    <ul className='header_menu'>
                        <li>
                            <ScrollLink
                                onClick={() => handleClick('home')}
                                activeClass="active"
                                to='home'
                                spy={true}
                                smooth={true}
                            >Home</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                onClick={() => handleClick('projects')}
                                activeClass="active"
                                to='projects'
                                spy={true}
                                smooth={true}
                            >Projects & Skills</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                onClick={() => handleClick('interaction')}
                                activeClass="active"
                                to='interaction'
                                spy={true}
                                smooth={true}
                            >
                                Interact with
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                onClick={() => handleClick('contact')}
                                activeClass="active"
                                to='contact'
                                spy={true}
                                smooth={true}
                            >
                                Contact
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Header;
