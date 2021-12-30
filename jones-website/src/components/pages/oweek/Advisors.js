import React from 'react'
import './Advisors.css'
import { Groups, PAAs } from './O-WeekGroups'

function Advisors() {
    return (
        <div className='advisor-container'>
            <h1 className='a-title'>Meet the Advisors</h1>
            <p className='a-text'>The 2021 Jones Advising Team is a group of over 60 individuals who want nothing more than to 
                welcome you to Rice with all the excitement and enthusiasm in the world. They have gone through 
                an intense selection process to be in these positions for the sole purpose of being there for 
                you as you transition to Rice and to continue supporting you throughout the rest of your time at 
                Rice. We couldn't have dreamed of a better group, so for all these reasons and more, we are VERY 
                excited to introduce you to the 2021 Jones Advising Team.</p>
            <div className='img-display'>
                {Groups.map((item, index) => {
                    return (
                        <li className='a-images' key={index} >
                            <img src={item.img} height={'250px'} width={'375px'}/>
                            <p>{item.name}</p>
                            <p className='names'>{item.advisors}</p>
                        </li>
                    );
                })}
            </div>
            <div>
                <p className='table-title'>O-Week Peer Academic Advisors</p>
                <div className='grid-display'>
                    <div className='row grid-title'>
                        <p className='name-col'>Name</p>
                        <p className='study-col'>Major(s), Minor(s), Track(s)</p>
                        <p className='email-col '>E-mail</p>
                    </div>
                    {PAAs.map((item, index) => {
                    return (
                        <li className='row' key={index} >
                            <p className='name-col grid-content'>{item.name}</p>
                            <p className='study-col grid-content'>{item.study}</p>
                            <p className='email-col grid-content'>{item.email}</p> 
                        </li>
                    );
                })}
                </div>
            </div>
        </div>
    )
}

export default Advisors
