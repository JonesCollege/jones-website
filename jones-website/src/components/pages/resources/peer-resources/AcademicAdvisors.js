import React from 'react'
import './AcademicAdvisors.css';




function AcademicAdvisors () {
    return (
        <div classname='advisors-desc-container'>
            <div classname='center-green-box'>
                <ul classname='meta-pro-text'>
                    <p> Serving as liaisons for the Office of Academic Advising, PAAs are students at each college that have been broadly trained
                        in numerous areas of academics here at Rice.  Generally speaking, your college PAA team coordinates numerous group and
                        individual activities that attempt to strengthen the academic vitality of your residential college. You may find yourself
                        seeking the advice of a PAA about:
                    </p>
                    <li>General graduation requirements</li>
                    <li>Specific classes</li>
                    <li>Research opportunities</li>
                    <li>Studying abroad</li>
                    <li>Professional school requirements</li>
                    <li> Or any topic as it relates to academics</li>
                </ul>
                <p>
                Remember, even if a particular PAA cannot answer each and every one of your detailed questions, they can at least serve as a
                helpful resource to point you in the right direction of someone else that can.  As you become more familiar with academics
                here at Rice, we hope you begin to understand that academics, learning, and especially advising are all ongoing dynamic
                conversations that involve multiple perspectives and not just a prescription for registrations.
                <br></br>
                For more information, visit http://oaa.rice.edu/.
                </p>

                <a href = 'https://goo.gl/forms/hWHrm0iiksUldL1z2' target = '_blank'>
                            <button className='advisor-button'>Make an Appointment</button>
                        </a>
                <a href = 'https://goo.gl/forms/uJLB2k6Aj5jjlW6n2' target = '_blank'>
                            <button className='advisor-button'>View Office Hours</button>
                        </a>
            </div>
        </div>
    )
}

export default AcademicAdvisors