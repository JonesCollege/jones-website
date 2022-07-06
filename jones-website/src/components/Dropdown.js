import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown( props ) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {props.arr.map((item, index) => {
          return (
            <li key={index} >
              {
                item.path?
                <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
              :
              <a 
              className={item.cName} 
              onClick={() => setClick(false)}
              href={item.external}
              target="_blank"
              rel="noreferrer"
              >
                {item.title}
              </a>
              }
              
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;