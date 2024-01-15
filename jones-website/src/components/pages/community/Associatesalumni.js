import React from 'react'
import { useState } from 'react'
import Footer from '../../Footer';
import './css/Associatesalumni.css'
import { useScrollToTop } from '../../../utility';

const Associatesalumni = () => {
  useScrollToTop();

  return (
    <div>
    <div className='associatesalumni'>
      <AssociatesDescription />
      <AssociatesGoogleSlides />
      <FamousAssociates />
      <MailingList />
      <DonateButton />
    </div> 
    <Footer/>
    </div>
  )
}

export default Associatesalumni

const AssociatesDescription = () => 
  <>
    <div className='headflex-row'>
        <div className='associatesintro-text'>
          <h2>ASSOCIATES</h2>
          <br></br>
          <p className='aasectiondesc'>Here at Rice, each college has a number of amazing faculty, 
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
            <p className='aatextdesc'>Jones has a campus police officer, medical doctors, the head of the 
              Physics department, the Dean of the Social Sciences, startup employees, 
              engineers, graduate students, and wonderful professors just waiting to 
              talk to you! Some of them have been traipsing around Jones and Rice for 
              over a decade, so they are great resources for how things work around here.
            </p>
          </div>
          <div className='associatesinteract-text'>
            <h3>HOW DO YOU INTERACT WITH ASSOCIATES?</h3>
            <br></br>
            <p className='aatextdesc'>Go to Associate's Night (a reception and dinner extravaganza held each 
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
  </>

const AssociatesGoogleSlides = () => 
  <div id='aaslidewrapper'>
    <iframe id='aaslidedeck' title="https://docs.google.com/presentation/d/e/2PACX-1vSfgVzqhFzUegoljoGd2tAXccBy0iaq8b-Kjd65Qyq5pxB-CI-F-XnKGtzVibEz4WsyVtbp55kS5jjj/embed?start=false&loop=true&delayms=3000" 
    src="https://docs.google.com/presentation/d/e/2PACX-1vSfgVzqhFzUegoljoGd2tAXccBy0iaq8b-Kjd65Qyq5pxB-CI-F-XnKGtzVibEz4WsyVtbp55kS5jjj/embed?start=false&loop=true&delayms=3000" 
    frameborder="0" width="960" height="569" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
  </div>

const FamousAssociates = () => 
  <div className='famousassociates-wrapper'>
    <div className='famousassociates-text'>
        <h3>ASSOCIATES IN HIGH PLACES</h3>
        <br></br>
        <p className='aasectiondesc'>In 2010, the Mayor of Houston Annise Parker (Jones '78) came to campus as part of a jack (prank) 
          organized by Jones College. The jack was coordinated by then-Jonesians Dan Lasalle and Prem 
          Ramkumar. Parker spoke before a huge crowd of Rice students for about five minutes before 
          announcing Jones was the BEST college. At that point, Jonesians in the crowd stood up and sprayed 
          silly string on the rest of the audience amid chants of "JIBA" and "Jones wins again!" In short, 
          Jones is the BEST college with the most POWERFUL associates! Although she is too busy to stop 
          by (being mayor and all), Jones is extremely proud to call her an associate.
        </p>
    </div>
  </div>

const MailingList = () => {
  const [mailinglstClicked, setMailingLstClicked] = useState(false);

  return (
  <div className='ad-flexbox'>
    <img src='/images/jones_alumni.png' alt='Jones alumni graduating' className='ad-image'/>
    <div className='ad-contents'>
      <h2 id="ad-title">ATTENTION WINNING JONES ALUMS</h2>
      <p className='aatextdesc'>Please fill out the short form linked below if you would like to 
        stay in touch with Jones College and new Jonesians!
      </p>
      <a target='_blank' rel="noreferrer" href='https://docs.google.com/forms/d/1DIYgBE9YPs6osayKHLZpSseDUbmTAm9RMsUkHixa2yA/viewform'>
      <button className={`mail-button ${mailinglstClicked? 'mail-buttonclicked': ''}`} onMouseDown={()=>{setMailingLstClicked(true)}} onMouseUp={()=>{setMailingLstClicked(false)}}>Join the Mailing List!</button>
      </a>
      <p className='aatextdesc'>Opting-in to the mailing list will keep you updated on the following:</p>
      <ul id="ad-list">
        <li className='aatextdesc'>Alumni events at Jones</li>
        <li className='aatextdesc'>Twice a year updates about the college</li>
        <li className='aatextdesc'>Beer Bike</li>
        <li className='aatextdesc'>Ways you can give back to Jones</li>
      </ul>
      <p id="ad-comments">If you have any comments or suggestions, please contact the External 
        Vice President at <a href='mailto: jonesevp@gmail.com' className='jonesemail'>jonesevp@gmail.com</a>
    </p>
    </div>
  </div>
)}

const DonateButton = () => {
  const [donateClicked, setDonateClicked] = useState(false);
  
  return (
  <a target='_blank' rel="noreferrer" href='https://riceconnect.rice.edu/donation/support-jones-college?'>
    <button className={donateClicked ? "donate donateclicked" : "donate"} onMouseDown={()=>{setDonateClicked(true)}} onMouseUp={()=>{setDonateClicked(false)}}>DONATE</button>
  </a>
)}