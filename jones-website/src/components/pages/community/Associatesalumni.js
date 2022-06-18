import React from 'react'
import { useState } from 'react'
import './Associatesalumni.css'
import ACard from './AssociateCard'
import DCard from './DescriptiveCard'
import { Associates } from './AssociateInfo'

const Associatesalumni = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalName, setModalName] = useState("");
  const [modalDesc, setModalDesc] = useState("");
  const [donateClicked, setDonateClicked] = useState(false);

  return (
    <div className='associatesalumni'>
      <div className='headflex-row'>
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
            External Vice President at <a href='mailto: jonesevp@gmail.com' className='jonesemail'>jonesevp@gmail.com</a>
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

      {showModal && <DCard img={modalImg} name={modalName} longdesc={modalDesc} className='fullassociatescard' closeonclick={()=>{
        setShowModal(false);
      }}/>}

      <div className='associatescard-flex'>
        {Associates.map((associate) => (
          /* associate.img must be a path into the public image folder */
          <ACard img={associate.img} name={associate.name} shortdesc={associate.shortdesc} email={associate.email} 
          oncardclick={()=>{setShowModal(true);
            setModalImg(associate.fullimg);
            setModalName(associate.name);
            setModalDesc(associate.longdesc);}}/>
        ))}
      </div>
      
      <div className='famousassociates-wrapper'>
        <div className='famousassociates-text'>
            <h2>ASSOCIATES IN HIGH PLACES</h2>
            <br></br>
            <p>In 2010, the Mayor of Houston Annise Parker (Jones '78) came to campus as part of a jack (prank) 
              organized by Jones College. The jack was coordinated by then-Jonesians Dan Lasalle and Prem 
              Ramkumar. Parker spoke before a huge crowd of Rice students for about five minutes before 
              announcing Jones was the BEST college. At that point, Jonesians in the crowd stood up and sprayed 
              silly string on the rest of the audience amid chants of "JIBA" and "Jones wins again!" In short, 
              Jones is the BEST college with the most POWERFUL associates! Although she is too busy to stop 
              by (being mayor and all), Jones is extremely proud to call her an associate.
            </p>
        </div>
      </div>
      
      <div className='ad-flexbox'>
       <img src='./images/james.jpg' alt='' className='ad-image'></img>
       <div className='ad-text'>
         <h2 id="ad-title">ATTENTION WINNING JONES ALUMS</h2>
         <p id="ad-instructions">Please fill out the short form linked below if you would like to 
           stay in touch with Jones College and new Jonesians!
         </p>
         <button id="ad-button">Join the Mailing List!</button>
         <p>Opting-in to the mailing list will keep you updated on the following:</p>
         <ul id="ad-list">
           <li>Alumni events at Jones</li>
           <li>Twice a year updates about the college</li>
           <li>Beer Bike</li>
           <li>Ways you can give back to Jones</li>
         </ul>
         <p id="ad-comments">If you have any comments or suggestions, please contact the External 
           Vice President at <a href='mailto: jonesevp@gmail.com' className='jonesemail'>jonesevp@gmail.com</a>
        </p>
       </div>
      </div>

      <button className={donateClicked ? "donate donateclicked" : "donate"} onMouseDown={()=>{setDonateClicked(true)}} onMouseUp={()=>{setDonateClicked(false)}}>DONATE</button>
    </div>
  )
}

export default Associatesalumni