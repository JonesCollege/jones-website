import React, { useEffect } from 'react'
import './Resources.css';




function AcademicAdvisors () {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
    },[])
    return (
        <div className='resource-desc-container'>
            <div className='resource-center-green-box'>
                <h3 className='resource-h3-title'> Peer Academic Advisors</h3>
                <p className='resource-p-text'> Serving as liaisons for the Office of Academic Advising, PAAs are students at each college that have been broadly trained
                        in numerous areas of academics here at Rice.  Generally speaking, your college PAA team coordinates numerous group and
                        individual activities that attempt to strengthen the academic vitality of your residential college. You may find yourself
                        seeking the advice of a PAA about:
                </p>
                <div className='resource-list-desc-container'>  
                    <ul className='resource-padding-left'>
                        <li className='resource-p-text'>General graduation requirements</li>
                        <li className='resource-p-text'>Specific classes</li>
                        <li className='resource-p-text'>Research opportunities</li>
                        <li className='resource-p-text'>Studying abroad</li>
                        <li className='resource-p-text'>Professional school requirements</li>
                        <li className='resource-p-text'> Or any topic as it relates to academics</li>
                    </ul>
                </div>
                <p className='resource-p-text'>
                Remember, even if a particular PAA cannot answer each and every one of your detailed questions, they can at least serve as a
                helpful resource to point you in the right direction of someone else that can.  As you become more familiar with academics
                here at Rice, we hope you begin to understand that academics, learning, and especially advising are all ongoing dynamic
                conversations that involve multiple perspectives and not just a prescription for registrations.
                <br/>
                <br />
                For more information, visit <a href = 'http://oaa.rice.edu/' className='green-link-text'>http://oaa.rice.edu/.</a>
                </p>
                {/* NEED TO UPDATE THESE BUTTONS */}
                {/* <div className='horizontal-buttons'>
                    <a href = 'https://goo.gl/forms/hWHrm0iiksUldL1z2' rel="noreferrer" target = '_blank'>
                                <button className='resource-button'>Make an Appointment</button>
                            </a>
                    <a href = 'https://goo.gl/forms/uJLB2k6Aj5jjlW6n2' rel="noreferrer" target = '_blank'>
                                <button className='resource-button'>View Office Hours</button>
                            </a>
                </div> */}

                
            </div>
        </div>
    )
}

export default AcademicAdvisors