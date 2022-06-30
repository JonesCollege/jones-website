import React from 'react'
import './HealthAdvisors.css';
import { RHAS } from './PeerNames';




function HealthAdvisors () {
    return (
        <div className='health-desc-container'>
            <div className='health-left-green-box'>
                <h3 className='health-h3-green-title'> Rice Health Advisors</h3>
                <p className='health-p-left-green-text'> Hey Jones! We are your Rice Health Advisors, a peer resource trained to assist you with wellbeing needs in college. We’ve
                    all participated  in a semester-long class at Rice to  receive training  and receive on-going training throughout the year
                    on the following topics:  </p>
                <br/>
                <div className='health-list-desc-container'>
                    <div className='health-padding-right'>  
                    <ul className='health-p-left-green-text'> 
                        <li className='health-p-left-green-text'>Mental Health</li>
                        <li className='health-p-left-green-text'> Drugs and Addiction</li>
                        <li className='health-p-left-green-text'>Body Image and Wellness</li>
                        <li className='health-p-left-green-text'>Nutritional Wellness and Exercise</li>
                        <li className='health-p-left-green-text'>Sexual Wellness and Healthy Sexuality</li>
                        <li className='health-p-left-green-text'>Conflict Mediation</li>
                    </ul>
                    </div> 
                    <div>
                    <ul>
                        <li className='health-p-left-green-text'>Time Management</li>
                        <li className='health-p-left-green-text'>Stress and Self-Care</li>
                        <li className='health-p-left-green-text'>Roomate Relationships</li>
                        <li className='health-p-left-green-text'>Suicide Prevention</li>
                        <li className='health-p-left-green-text'>Active Bystander Training</li>
                        <li className='health-p-left-green-text'>Ally Training</li>
                    </ul>
                    </div>
                </div>
                <br/>
                <p className='health-p-left-green-text'>We work closely with the Rice Counseling and Wellness Centers (and our A-Team!) in order to provide direct support to our
                college through year-long programming, one-on-one support, and office hours concerning anything and everything related to
                your wellbeing! Although we have designated office hour times, you can reach out to us individually at any time. Our
                intention with office hours is to provide clear opportunities for students to come to us if they are hesitant about
                reaching out to us at a random time. But seriously, reach out whenever! <br/>
                <br/>
                We are well trained, but we are not experts. So, if there’s something we don’t know about, we’ll know who to refer you to
                instead and support you through the process. We handle all conversations with confidentiality unless we see a peer in a
                situation of immediate danger.
                <br/>
                <br/>
                RHAs are also stocked with: bandages, pain relievers, ear plugs, condoms, cough drops, tampons, pads, cool packs, heating
                pads, antacids, and thermometers. These resources are available at anytime, please don’t hesitate to ask!
                </p>
            </div>
            <div className='health-grid-parent'>
            <div className='health-grid-container'>
                <div className='health-grid-row'>
                    <div className='health-grid-cell'>
                        <p className='cell-headline-text'>
                            NAME
                        </p>
                    </div>
                    <div className='health-grid-cell'>
                        <p className='cell-headline-text'>
                            CONTACT
                        </p>
                    </div>
                </div>
            {   
                RHAS.map((item, key) => {
                    return (
                        <div className='health-grid-row'>
                            <div className='health-grid-cell'>
                                <p className='cell-text'>
                                    {item.name}, {item.position}
                                </p>
                                <p className='health-italic-text'>
                                    {item.year}
                                </p>
                            </div>
                            <div className='health-grid-cell'>
                                <p className='cell-text'>
                                    {item.email}
                                </p>
                                <p className='health-italic-text'>
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

export default HealthAdvisors  







