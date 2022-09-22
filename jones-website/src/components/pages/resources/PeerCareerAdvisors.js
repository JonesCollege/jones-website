import React from 'react'
import ContactGrid from './ContactGrid';
import './Resources.css';
import { PCAS } from './DataSheet';




function PeerCareerAdvisors () {
    return (
        <div className='resource-desc-container'>
            <div className='resource-center-box'>
            <h3 className='resource-h3-title'>PEER CAREER ADVISORS</h3>
            <ul>
            <p className='resource-p-text'> Peer Career Advisors (PCAs) are a group of student volunteers who are selected through an application and interview
            process. They serve as ambassadors to undergraduates and play a valuable role in supporting the Center for Career
            Development. PCAs reinforce the knowledge, skills, and resources offered through the CCD. PCAs are specially trained to
            assist you with the following topics:</p>
            <br/>
            <li className='resource-p-text resource-indent-padding'>Resume and cover letter reviews</li>
            <li className='resource-p-text resource-indent-padding'>Job and internship basics</li>
            <li className='resource-p-text resource-indent-padding'>Using our online resources including RICElink and Vault</li>
            <li className='resource-p-text resource-indent-padding'>Understanding CCD services</li>
            </ul>
            </div>
            <ContactGrid Info={PCAS} />
        </div>
    )
}


export default PeerCareerAdvisors