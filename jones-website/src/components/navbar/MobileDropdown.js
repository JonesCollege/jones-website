import React from 'react';
import { Link } from 'react-router-dom';

function Dropdown({arr, closeDropdown, closeNavMenu}) {
  return (
    <>
      <ul className='mobile-dropdown-menu'>
        {arr.map((item, index) => {
          return (
            <li key={index} >
              {
                item.path ? (
                  <Link
                    className='mobile-dropdown-link'
                    to={item.path}
                    onClick={() => {
                      closeDropdown()
                      closeNavMenu()
                    }}
                  > 
                    {item.title}
                  </Link>
                ):(
                <a  
                  className='mobile-dropdown-link'
                  onClick={() => {
                    closeDropdown()
                  }}
                  href={item.external}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.title}
                </a>)
              }
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;