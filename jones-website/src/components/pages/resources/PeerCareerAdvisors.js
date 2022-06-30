import React from 'react'
import './PeerCareerAdvisors.css';
import { PCAS } from './PeerNames';




function PeerCareerAdvisors () {
    return (
        <div className='pca-desc-container'>
            <div className='pca-center-box'>
            <h3 className='pca-h3-title'>PEER CAREER ADVISORS</h3>
            <ul>
            <p className='pca-p-text'> Peer Career Advisors (PCAs) are a group of student volunteers who are selected through an application and interview
            process. They serve as ambassadors to undergraduates and play a valuable role in supporting the Center for Career
            Development. PCAs reinforce the knowledge, skills, and resources offered through the CCD. PCAs are specially trained to
            assist you with the following topics:</p>
            <br/>
            <li className='pca-p-text pca-indent-padding'>Resume and cover letter reviews</li>
            <li className='pca-p-text pca-indent-padding'>Job and internship basics</li>
            <li className='pca-p-text pca-indent-padding'>Using our online resources including RICElink and Vault</li>
            <li className='pca-p-text pca-indent-padding'>Understanding CCD services</li>
            </ul>
            </div>

            <div className='pca-desc-container'>
            <div className='pca-grid-parent'>
            <div className='pca-grid-container'>
                <div className='pca-grid-row'>
                    <div className='pca-grid-cell'>
                        <p className='cell-headline-text'>
                            NAME
                        </p>
                    </div>
                    <div className='pca-grid-cell'>
                        <p className='cell-headline-text'>
                            CONTACT
                        </p>
                    </div>
                </div>
            {   
                PCAS.map((item, key) => {
                    return (
                        <div className='pca-grid-row'>
                            <div className='pca-grid-cell'>
                                <p className='cell-text'>
                                    {item.name}
                                </p>
                                <p className='pca-italic-text'>
                                    {item.year}
                                </p>
                            </div>
                            <div className='pca-grid-cell'>
                                <p className='cell-text'>
                                    {item.email}
                                </p>
                            </div>
                        </div>
                    );
                })
                }
            </div>
            </div>
            </div>



        </div>
    )
}


export default PeerCareerAdvisors