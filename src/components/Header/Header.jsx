import React, { useState, useEffect } from 'react';
import './Header.css';
import Bars from '../../assets/icons/icon_menu.png';
import CloseBars from '../../assets/icons/icon_menu_close.png';
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from 'react-router-dom';

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
            window.location.href = `/`;
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
                            {location.pathname === '/' ? (
                                <ScrollLink
                                    onClick={() => setMenuOpened(false)}
                                    activeClass="active"
                                    to='home'
                                    spy={true}
                                    smooth={true}
                                >Home</ScrollLink>
                            ) : (
                                <Link to='/' onClick={() => handleClick('home')}>Home</Link>
                            )}
                        </li>
                        <li>
                            {location.pathname === '/' ? (
                                <ScrollLink
                                    onClick={() => setMenuOpened(false)}
                                    activeClass="active"
                                    to='projects'
                                    spy={true}
                                    smooth={true}
                                >Projects & Skills</ScrollLink>
                            ) : (
                                <Link to='/' onClick={() => handleClick('projects')}>Projects & Skills</Link>
                            )}
                        </li>
                        <li>
                            {location.pathname === '/' ? (
                                <ScrollLink
                                    onClick={() => setMenuOpened(false)}
                                    activeClass="active"
                                    to='interaction'
                                    spy={true}
                                    smooth={true}
                                >
                                    Interact with
                                </ScrollLink>
                            ) : (
                                <Link to='/' onClick={() => handleClick('interaction')}>Interact with</Link>
                            )}
                        </li>
                        <li>
                            {location.pathname === '/' ? (
                                <ScrollLink
                                    onClick={() => setMenuOpened(false)}
                                    activeClass="active"
                                    to='contact'
                                    spy={true}
                                    smooth={true}
                                >
                                    Contact
                                </ScrollLink>
                            ) : (
                                <Link to='/' onClick={() => handleClick('contact')}>Contact</Link>
                            )}
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Header;
