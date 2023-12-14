import React from 'react'
import './Tooltip.css'

const Tooltip = ({children, text}) => {
  return (
    <div className='tooltip-trigger'>
        {children}
        <div className='tooltip'>
            {text}
        </div>
    </div>
  )
}

export default Tooltip