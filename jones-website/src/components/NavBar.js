import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GoKebabVertical } from "react-icons/go";
import { IoClose, IoAdd } from "react-icons/io5";
import { GrFormSubtract } from "react-icons/gr";
import MobileDropdown from './MobileDropdown';
import Dropdown from './Dropdown';
import './NavBar.css';

const CommunityItems = [
  {
    title: 'STUDENT GOV',
    path: '/studentgov',
    cName: 'dropdown-link'
  },
  {
    title: 'A-TEAM',
    path: '/ateam',
    cName: 'dropdown-link'
  },
  {
    title: 'ASSOCIATES/\nALUMNI',
    path: '/associates-alumni',
    cName: 'dropdown-link'
  }
];

const FormItems = 
[
  {
    title: 'ROOM RESERVATION',
    external: 'https://docs.google.com/forms/d/e/1FAIpQLSclKvfrQi-cu-uTbUPSxF-aCCxFtimlpxbnl6uRTeoEtTiexw/viewform',
    cName: 'dropdown-link'
  },
  {
    title: 'ACCESSIBILITY FUND',
    external: 'https://docs.google.com/forms/d/e/1FAIpQLSfXUTkDQQKmFZgkuCQkoPmhuHPwqIdAfLdGotfAwUoLAXpt4Q/viewform',
    cName: 'dropdown-link'
  },
  {
    title: 'WORK ORDER',
    external: 'https://www.emailmeform.com/builder/form/uT8P0EVQqH0v1b8905ef2',
    cName: 'dropdown-link'
  },
  {
    title: 'JIBA FUND',
    external: 'https://docs.google.com/forms/d/e/1FAIpQLSdfdOFz7ugG-UBQs-l3VUd3Ekg0dBd9UuWG_T_LNBJFkSKI5Q/viewform?c=0&w=1',
    cName: 'dropdown-link'
  }
];

function NavBar() {
    const [mobileNav, setMobileNav] = useState(false);
    
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
        <div className='navbar-container'>
          <div className='left-link'>
            <Link to='/' className='home-container'>
              <div className='home-link'>
                JONES COLLEGE
              </div>
            </Link>
          </div>
          { mobileNav ? (
            <MobileNav />
            ):(
            <DesktopNav />
          )}
        </div>
      </nav>
    )
}

export default NavBar


const DesktopNav = () => {
  //dropdown hover actions
  const [dropdownCommunity, setDropdownCommunity] = useState(false);
  const [dropdownForms, setDropdownForms] = useState(false);

  return (
    <div className='nav-grid-container'>
      <ul className='nav-grid'>
        <li className='nav-item'>
            <Link
              to='/o-week'
              className='nav-links'
            >
              OWEEK
            </Link>
          </li>
        <li
            className='nav-item'
          >
            <Link
                to='/beerbike-traditions'
                className='nav-links'
            >
              BEER BIKE/<br/>TRADITIONS
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={() => setDropdownCommunity(true)}
            onMouseLeave={() => setDropdownCommunity(false)}
          >
            <div
                className='nav-links'
            >
              COMMUNITY
            </div>
            {dropdownCommunity && <Dropdown arr={CommunityItems}/>}
          </li>
          <li
            className='nav-item'
          >
            <Link
                to='/resources'
                className='nav-links'
            >
              RESOURCES
            </Link>
          </li>
          <li className='nav-item'
            onMouseEnter={() => setDropdownForms(true)}
            onMouseLeave={() => setDropdownForms(false)}
          >
              <div
                className='nav-links'
            >
              FORMS
            </div>
            {dropdownForms && <Dropdown arr={FormItems}/>}
          </li>
        </ul>
      </div>
  )
}

const MobileNav = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [expandNavCommunity, setExpandNavCommunity] = useState(false)
  const [expandNavForm, setExpandNavForm] = useState(false)
  const handleNavClick = () => {
    setNavOpen(!navOpen)
  }
  
  return(
    <div>
      {
        navOpen ? (
          <div className='nav-menu'>
            <IoClose 
              className='menu-icon'
              onClick={() => {
                handleNavClick()
                setExpandNavForm(false)
                setExpandNavCommunity(false)
              }}
            />
              <ul>
                <li className='nav-item'>
                    <Link
                      to='/o-week'
                      className='nav-links-mobile nav-link-padding'
                      onClick={handleNavClick}
                    >
                      OWEEK
                    </Link>
                  </li>
                <li className='nav-item'>
                    <Link
                        to='/beerbike-traditions'
                        className='nav-links-mobile nav-link-padding'  
                        onClick={handleNavClick}
                    >
                      BEER BIKE / TRADITIONS
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <button  
                      className='nav-links-mobile nav-link-expand' 
                      onClick={()=>setExpandNavCommunity(!expandNavCommunity)}>
                        {expandNavCommunity ? (
                          <GrFormSubtract className='expand-icon'/> 
                        ): (
                          <IoAdd className='expand-icon'/>
                        ) }
                      COMMUNITY
                    </button>
                    {expandNavCommunity && 
                      <MobileDropdown 
                        arr={CommunityItems} 
                        closeDropdown={()=>setExpandNavCommunity(false)} 
                        closeNavMenu={handleNavClick}
                      />
                    }
                  </li>
                  <li className='nav-item'>
                    <Link
                        to='/resources'
                        className='nav-links-mobile nav-link-padding'
                        onClick={handleNavClick}
                    >
                      RESOURCES
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <button  
                      className='nav-links-mobile nav-link-expand' 
                      onClick={()=>setExpandNavForm(!expandNavForm)}>
                        {expandNavForm ? (
                          <GrFormSubtract className='expand-icon'/> 
                        ): (
                          <IoAdd className='expand-icon'/>
                        ) }
                      FORMS
                    </button>
                    {expandNavForm && 
                      <MobileDropdown 
                        arr={FormItems} 
                        closeDropdown={()=>setExpandNavForm(false)} 
                        closeNavMenu={handleNavClick}
                      />
                    }
                  </li>
                  <li className='nav-item'>
                    <a
                        className='nav-links-mobile nav-link-padding'
                        onClick={() => handleNavClick}
                        target="_blank" 
                        rel="noreferrer" 
                        href="https://riceconnect.rice.edu/donation/support-jones-college?fbclid=IwAR3rym2N0QS5e5j3QziVX2OoG_ts5oHdKrMQTcQBhxRHBbcKmHZHaY7Q6aA"
                    >
                      DONATE
                    </a>
                  </li>
                </ul>
            </div>
        ) : (
          <GoKebabVertical className='menu-icon' onClick={handleNavClick}/>
        )
      }
      
    </div>
  )

}