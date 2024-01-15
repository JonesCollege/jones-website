import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoKebabHorizontal } from "react-icons/go";
import { IoClose, IoAdd } from "react-icons/io5";
import { GrFormSubtract } from "react-icons/gr";
import MobileDropdown from './MobileDropdown';
import './nav.css';
//import CalendarMobile from '../calendar/CalendarMobile';
import { CommunityItems, FormItems } from './INFO/NavbarItems';


//const MobileNav = (showCalModal, setShowCalModal) => {
const MobileNav = () => {
    const [navOpen, setNavOpen] = useState(false)
    const [expandNavCommunity, setExpandNavCommunity] = useState(false)
    const [expandNavForm, setExpandNavForm] = useState(false)
    const handleNavClick = () => {
        setNavOpen(!navOpen)
    }
    
    // const openCalModal = () => {
    //   setShowCalModal(true);
    // };
    // const closeCalModal = () => {
    //     setShowCalModal(false);
    // };
    
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
            <>
            <div className='menu-icons'>
                {/* <button onClick={openCalModal} className='mobile-button'>
                <IoMdCalendar size={24}/>
                </button> */}
                <button onClick={handleNavClick} className='mobile-button'>
                <GoKebabHorizontal size={24} />
                </button>
            </div>
                {/* <Modal
                isOpen={showCalModal}
                className="calendar-modal"
                onRequestClose={closeCalModal}
                centered
                style={{zIndex:'99 !important'}}
                >
                    <CalendarMobile closeModal={closeCalModal}/>
                </Modal> */}
            </>
            )
        }
        
        </div>
    )
    }

    export default MobileNav