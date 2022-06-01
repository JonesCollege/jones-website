import React from 'react'
import './Associatesalumni.css'
import ACard from './AssociateCard'
import DCard from './DescriptiveCard'
import { Associates } from './AssociateInfo'

const Associatesalumni = () => {
  return (
    <div className='associatesalumni'>
      <div className='flex-row'>
        <div className='associatesintro-text'>
          <h2>ASSOCIATES</h2>
          <br></br>
          <p>Here at Rice, each college has a number of amazing faculty, 
            staff, alumni, and community members that are affectionately 
            referred to as Associates. At Jones, they are the best of the bunch.
            They cheer on our PowderPuff, sponsor study breaks, and do whatever
            they can to make your college experience the best it can possibly be.
          </p>
        </div>
        <div className='joinassociates'>
          <p className='joinassociates-text'>If you are interested in becoming an associate, please contact the 
            External Vice President at <a href='mailto: jonesevp@gmail.com'>jonesevp@gmail.com</a>
          </p>
        </div>
      </div>
      
      <div className='associatesintro-bg'>
        <div className='introflex-row'>
          <div className='associateswho-text'>
            <h3>WHO ARE THE ASSOCIATES?</h3>
            <br></br>
            <p>Jones has a campus police officer, medical doctors, the head of the 
              Physics department, the Dean of the Social Sciences, startup employees, 
              engineers, graduate students, and wonderful professors just waiting to 
              talk to you! Some of them have been traipsing around Jones and Rice for 
              over a decade, so they are great resources for how things work around here.
            </p>
          </div>
          <div className='associatesinteract-text'>
            <h3>HOW DO YOU INTERACT WITH ASSOCIATES?</h3>
            <br></br>
            <p>Go to Associate's Night (a reception and dinner extravaganza held each 
              semester on behalf of the North Servery Chef). Take their classes. Keep 
              in touch with your O-Week Associates. Facebook friend them if you must. If 
              you're looking for some good conversation and some cool adults, just introduce 
              yourself. They're really eager to meet you, and they have plenty of stories and 
              memories from their own Jones and Rice experiences. And just think: you might 
              someday become an Associate too!
            </p>
          </div>
        </div>
      </div>

      <DCard img='./images/aaron_pathak.jpg' name='Jones President' desc="Go to Associate's Night (a reception and dinner extravaganza held each 
                    semester on behalf of the North Servery Chef). Take their classes. Keep 
                    in touch with your O-Week Associates. Facebook friend them if you must. If 
                    you're looking for some good conversation and some cool adults, just introduce 
                    yourself. They're really eager to meet you, and they have plenty of stories and 
                    memories from their own Jones and Rice experiences. And just think: you might 
                    someday become an Associate too!"/>

      <div className='associatescard-wrapper'>
        <div className='associatescard-flex'>
          {Associates.map((associate) => (
            /* associate.img must be a path into the public image folder */
            <ACard img={associate.img} name={associate.name} desc={associate.desc} email={associate.email}/>
          ))}
        </div>
      </div>


    </div>
  )
}

export default Associatesalumni