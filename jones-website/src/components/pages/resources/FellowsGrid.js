import React from 'react'
import { Fellows } from './PeerNames';
import './FellowsGrid.css';




function FellowsGrid () {
    return (
        <div className='grid-container'>
            {
                Fellows.map((item, key) => {
                    return (
                        <div className='grid-row'>
                            <div className='grid-cell'>
                                <p className={(key === 0)? `cell-headline-text`: `cell-text`}>
                                    {item.name}
                                </p>
                            </div>
                            <div className='grid-cell'>
                                <p className={(key === 0)? `cell-headline-text`: `cell-text`}>
                                    {item.email}
                                </p>
                            </div>
                            <div className='grid-cell'>
                                <p className={(key === 0)? `cell-headline-text`: `cell-text`}>
                                    {item.subjects}
                                </p>
                            </div>
                        </div>
                    );
                })
            }
        </div> 
    )
}

export default FellowsGrid