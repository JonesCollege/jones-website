import React from 'react'
import './Resources.css'

function ContactGrid({Info}) {
  return (
    <div className='resource-grid-parent'>
            <div className='resource-grid-container'>
                <div className='resource-grid-row'>
                    <div className='resource-grid-cell'>
                        <p className='cell-headline-text'>
                            NAME
                        </p>
                    </div>
                    <div className='resource-grid-cell'>
                        <p className='cell-headline-text'>
                            CONTACT
                        </p>
                    </div>
                </div>
    <div>{   
        Info.map((item, key) => {
            return (
            <div className='resource-grid-row' key={key}>
                <div className='resource-grid-cell'>
                    <p className='cell-text'>
                        {item.name}{item.position && `, ${item.position}`}
                    </p>
                    <p className='resource-italic-text'>
                        {item.year}
                    </p>
                </div>
                <div className='resource-grid-cell'>
                    <p className='cell-text'>
                        {item.email}
                    </p>
                    <p className='resource-italic-text'>
                        {item.phone}
                    </p>
                </div>
            </div>
            );
        })
        }
        </div>
        </div>
        </div>   
  )
}

export default ContactGrid