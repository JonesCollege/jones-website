import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import Dropdown from './Dropdown';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else{
            setButton(true);
        }
    };

    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    
    return (
        <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-text' onClick={closeMobileMenu}>
              <img className='navbar-logo' src='/jones_logo_small_t.png' alt="Logo" />
              JONES
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li
                className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <Link
                    to='/about'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                  About
                </Link>
                {dropdown && <Dropdown />}
              </li>
              <li className='nav-item'>
                <Link
                  to='/o-week'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  O-Week
                </Link>
              </li>
              <li
                className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <Link
                    to='/services'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                  Leadership
                </Link>
                {dropdown && <Dropdown />}
              </li>
              <li
                className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <Link
                    to='/resources'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                  Resources
                </Link>
                {dropdown && <Dropdown />}
              </li>
              <li
                className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <Link
                    to='/people'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                  People
                </Link>
                {dropdown && <Dropdown />}
              </li>
              <li className='nav-item'>
                <Link
                  to='/forms'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Forms
                </Link>
              </li>
              <li>
                <Link
                  to='/donate'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Donate
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>DONATE</Button>}
          </div>
        </nav>
      </>
    )
}

export default NavBar
