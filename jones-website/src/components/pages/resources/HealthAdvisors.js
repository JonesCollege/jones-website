import React from 'react'
import './Resources.css';
import { RHAS } from './DataSheet';
import ContactGrid from './ContactGrid';

function HealthAdvisors () {
    return (
        <div className='resource-desc-container'>
            <div className='resource-left-green-box'>
                <h3 className='resource-h3-title'> Rice Health Advisors</h3>
                <p className='resource-p-text'> Hey Jones! We are your Rice Health Advisors, a peer resource trained to assist you with wellbeing needs in college. We’ve
                    all participated  in a semester-long class at Rice to  receive training  and receive on-going training throughout the year
                    on the following topics:  </p>
                <div className='resource-list-desc-container'>
                    <div className='resource-padding-right'>  
                        <ul> 
                            <li className='resource-p-text'>Mental Health</li>
                            <li className='resource-p-text'> Drugs and Addiction</li>
                            <li className='resource-p-text'>Body Image and Wellness</li>
                            <li className='resource-p-text'>Nutritional Wellness and Exercise</li>
                            <li className='resource-p-text'>Sexual Wellness and Healthy Sexuality</li>
                            <li className='resource-p-text'>Conflict Mediation</li>
                        </ul>
                    </div> 
                    <div>
                        <ul>
                            <li className='resource-p-text'>Time Management</li>
                            <li className='resource-p-text'>Stress and Self-Care</li>
                            <li className='resource-p-text'>Roomate Relationships</li>
                            <li className='resource-p-text'>Suicide Prevention</li>
                            <li className='resource-p-text'>Active Bystander Training</li>
                            <li className='resource-p-text'>Ally Training</li>
                        </ul>
                    </div>
                </div>
                <p className='resource-p-text'>We work closely with the Rice Counseling and Wellness Centers (and our A-Team!) in order to provide direct support to our
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
                <ContactGrid Info={RHAS} />
            </div>
    )
}

export default HealthAdvisors  






