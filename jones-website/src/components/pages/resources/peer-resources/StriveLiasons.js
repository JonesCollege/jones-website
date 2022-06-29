import React from 'react'
import './StriveLiasons.css';
import { Strive } from './PeerNames';


function StriveLiason () {
    return (
        <div className='strive-desc-container'>
            <div className='strive-grid-parent'>
            <div className='strive-grid-container'>
                <div className='strive-grid-row'>
                    <div className='strive-grid-cell'>
                        <p className='strive-headline-text'>
                            NAME
                        </p>
                    </div>
                    <div className='strive-grid-cell'>
                        <p className='strive-headline-text'>
                            CONTACT
                        </p>
                    </div>
                </div>
            {   
                Strive.map((item, key) => {
                    return (
                        <div className='strive-grid-row'>
                            <div className='strive-grid-cell'>
                                <p className='cell-text'>
                                    {item.name}, {item.position}
                                </p>
                                <p className='strive-italic-text'>
                                    {item.year}
                                </p>
                            </div>
                            <div className='strive-grid-cell'>
                                <p className='cell-text'>
                                    {item.email}
                                </p>
                                <p className='strive-italic-text'>
                                    {item.phone}
                                </p>
                            </div>
                        </div>
                    );
                })
                }
            </div>
            </div>
            <div className='strive-right-box'>
                <h3 className='h3-green-title'>Strive Liasons</h3>
                <br/>
                <p className='strive-p-text'> STRIVE Coalition is a dedicated group of students who have come together to address sexual and domestic violence on campus.
                We envision a world that is free from inequality and violence, where every person experiences sexuality and relationships
                in healthy and positive ways. Liaisons are specially trained students who host prevention activities and seek to support
                students by providing information about resources available on and off campus
                </p>
            </div>
        </div>
    )
}

export default StriveLiason