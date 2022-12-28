import React, { useState, useEffect } from 'react';
import Modal from "react-modal";
import { Link } from 'react-router-dom';
import { GoKebabVertical } from "react-icons/go";
import { IoClose, IoAdd } from "react-icons/io5";
import { GrFormSubtract } from "react-icons/gr";
import { IoMdCalendar } from "react-icons/io";
import MobileDropdown from './MobileDropdown';
import Dropdown from './Dropdown';
import './NavBar.css';
import CalendarModal from './calendar/CalendarModal';

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
    external: 'https://docs.google.com/forms/d/e/1FAIpQLSdt3hB8SsNMdGu8_R0nuFMLIyeqW2UMTlhAIw-vhh-s4Ynw3w/viewform',
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
  },
  {
    title: 'RICE MUTUAL AID',
    external: 'linktr.ee/ricemutualaid',
    cName: 'dropdown-link'
  }
];

function NavBar() {
    const [mobileNav, setMobileNav] = useState(false);    
    const [showCalModal, setShowCalModal] = useState(false);

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
      <nav className='navbar' style={{zIndex:`${showCalModal? 0: 50}`}}>
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
            <DesktopNav showCalModal={showCalModal} setShowCalModal={setShowCalModal}/>
          )}
        </div>
      </nav>
    )
}

export default NavBar


const DesktopNav = ({showCalModal, setShowCalModal}) => {
  //dropdown hover actions
  const [dropdownCommunity, setDropdownCommunity] = useState(false);
  const [dropdownForms, setDropdownForms] = useState(false);

  const openCalModal = () => {
    setShowCalModal(true);
  };
  const closeCalModal = () => {
      setShowCalModal(false);
  };

  return (
    <div className='nav-grid-container'>
      <ul className='nav-grid'>
        <li className='nav-item'>
            <button onClick={openCalModal} className='calendar-button'>
              <IoMdCalendar size={20}/>
            </button>
          </li>
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
            <button
                className='nav-links hover-button'
                onClick={() => setDropdownCommunity(!dropdownCommunity)}
            >
              COMMUNITY
            </button>
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
              <button
                className='nav-links hover-button'
                onClick={() => setDropdownForms(!dropdownForms)}
            >
              FORMS
            </button>
            {dropdownForms && <Dropdown arr={FormItems}/>}
          </li>
        </ul>
        <Modal
          isOpen={showCalModal}
          className="calendar-modal"
          onRequestClose={closeCalModal}
          centered
          style={{zIndex:'99 !important'}}
          >
            <CalendarModal closeModal={closeCalModal}/>
        </Modal>
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