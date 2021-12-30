import React from 'react';
import  './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--secondary'];
const SIZES = ['btn--medium', 'btn-- large'];

export const Button = ({children, type, onClick, ButtonStyle, ButtonSize}) => {
    const checkButtonStyle = STYLES.includes(ButtonStyle) ? ButtonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(ButtonSize) ? ButtonSize : SIZES[0];

    return (
        <Link to='/' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
};