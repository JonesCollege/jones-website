import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import './NavBar.css';

function NavBar() {
  const CommunityItems = [
    {
      title: 'STUDENT GOV',
      path: '/studentgov',
      cName: 'dropdown-link'
    },
    {
      title: 'A-TEAM',
      path: '/ateam',
      hook: 'coords',
      cName: 'dropdown-link'
    },
    {
      title: 'ASSOCIATES/\nALUMNI',
      path: '/associates-alumni',
      cName: 'dropdown-link'
    }
  ];

    const [click, setClick] = useState(false);
    //const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);

    // const showButton = () => {
    //     if(window.innerWidth <= 960) {
    //         setButton(false);
    //     } else{
    //         setButton(true);
    //     }
    // };
    
    //dropdown hover actions
    const [dropdownCommunity, setDropdownCommunity] = useState(false);

    // useEffect(() => {
    //     showButton();
    // }, []);

    //window.addEventListener('resize', showButton);
    
    return (
        <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <div className='left-link'>
              <Link to='/' className='home-container'>
              <div className='home-link'>
                JONES COLLEGE
              </div>
              </Link>
            </div>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <div className='nav-grid-container'>
              <ul className={click ? 'nav-grid active' : 'nav-grid'}>
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
                <li className='nav-item'>
                  <Link
                    to='/forms'
                    className='nav-links'
                  >
                    FORMS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
}

export default NavBar
