import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Dropdown(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={handleClick}
      className={click ? "dropdown-menu clicked" : "dropdown-menu"}
    >
      {props.arr.map((item, index) => {
        if (item.route) {
          console.log("heeee")
        }
        return (
          <li key={index}>
            {item.route ? (
              <Link
                className="dropdown-link"
                to={item.route}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            ) : (
              <a
                className="dropdown-link"
                onClick={() => setClick(false)}
                href={item.external}
                target="_blank"
                rel="noreferrer"
              >
                {item.title}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
