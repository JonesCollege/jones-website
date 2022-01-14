import React from 'react'
import {CollegeCourt as collegeCourt} from './Positions'
import Footer from '../../Footer';

function CollegeCourt() {
    return (
        <>
        <div>
            <h1>Jones College Court</h1>
            <p>The College Court system is designed on the principal that students govern and monitor one another. 
                Thus, when you have an issue (noise complaints, out of control parties, etc.) please contact an Associate 
                Justice or the Chief Justice first as opposed to RUPD. This tends to mediate issues much better and leads 
                to more constructive outcomes for everyone involved. In addition, if you plan on having a private 
                gathering involving alcoholic beverages, text one of us (whomever you feel most comfortable with) and let 
                us know.</p>
            <p3>Jones College Court 2021-2022</p3>
            {
                collegeCourt.map((item, index) => {
                    return(
                        <li key={index}>
                        <h4>{item.floor}</h4>
                        <p>{item.name}</p>
                        <p>{item.phone}</p>
                        <p>{item.email}</p>
                    </li>
                    );
                })
            }
            <h2>New Guest Policy</h2>
            <p>If you are having someone stay at Jones for 2 or more nights who is not a Rice student, please&nbsp;
             <a href='https://docs.google.com/forms/d/1GrSOZFDVrWfDWEIhdwBwKFj0mA-5xnEfg6YCDvGVnEs/viewform'>register them here</a>.</p>
            <p>Just a reminder, guests must also adhere to the Rice University and Jones Code of Conduct. If your guest violates anything 
            (which they won't!), you will be held responsible.Make sure you're familiar with the&nbsp; 
            <a href='http://jones.rice.edu/s/jones-college-code-of-conduct.pdf'>Jones College Code of Conduct</a>!</p>

            <h2>Registering Events</h2>
            <p>If you are having an event with multiple people (more than 2 people who don't live in your room/suite) and there is alcohol, 
                let an Associate Justice or the Chief Justice know! Acceptable forms of communication:</p>
                <ul>
                    <li>Text</li>
                    <li>Facebook Message</li>
                    <li>Hand-written Note</li>
                    <li>Word of mouth (directly from you to us)</li>
                </ul>
        </div>
        <Footer />
        </>
    )
}

export default CollegeCourt
