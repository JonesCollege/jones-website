import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

function Nav() {
    const [mobileNav, setMobileNav] = useState(false);    
    //const [showMobileCal, setShowMobileCal] = useState(false);

    const showMobileNav = () => {
        if(window.innerWidth <= 1000) {
            setMobileNav(true);
        } else{
            setMobileNav(false);
        }
    };

    useEffect(() => {
        showMobileNav();
    }, []);

    window.addEventListener('resize', showMobileNav);
    
    return (
      <nav className='navbar'>
      {/* <nav className='navbar' style={{zIndex:`${(showCalModal || showMobileCal)? 0: 50}`}}> */}
        <div className='navbar-container'>
          <div className='left-link'>
            <Link to='/' className='home-container'>
              <div className='home-link'>
                JONES COLLEGE
              </div>
            </Link>
          </div>
          { mobileNav ? (
            // <MobileNav showCalModal={showMobileCal} setShowCalModal={setShowMobileCal}/>
            <MobileNav />
            ):(
            <DesktopNav />
          )}
        </div>
      </nav>
    )
}

export default Nav