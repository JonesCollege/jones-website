import React from 'react'
import { useState } from 'react'
import './Associatesalumni.css'
import ACard from './associates-alumni/AssociateCard'
import DCard from './associates-alumni/DescriptiveCard'
import { Associates } from './information/AssociateInfo'

const Associatesalumni = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalName, setModalName] = useState("");
  const [modalDesc, setModalDesc] = useState("");
  const [modalObjPos, setModalObjPos] = useState('');
  const [modalMaxSize, setModalMaxSize] = useState('');
  const [mailinglstClicked, setMailingLstClicked] = useState(false);
  const [donateClicked, setDonateClicked] = useState(false);

  return (
    <div className='associatesalumni'>
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

      {showModal && <DCard img={modalImg} name={modalName} longdesc={modalDesc} objpos={modalObjPos} maxsize={modalMaxSize} className='fullassociatescard' closeonclick={()=>{
        setShowModal(false);
      }}/>}

      <div className='associatescard-flex'>
        {Associates.map((associate, idx) => (
          /* associate.img must be a path into the public image folder */
          <ACard img={associate.img} name={associate.name} shortdesc={associate.shortdesc} email={associate.email} 
          objpos={associate.imgobjpos} maxsize={associate.imgmaxsize} key={idx}
          oncardclick={()=>{setShowModal(true);
            setModalImg(associate.fullimg);
            setModalName(associate.name);
            setModalDesc(associate.longdesc);
            setModalObjPos(associate.fullimgobjpos);
            setModalMaxSize(associate.fullimgmaxsize)}}/>
        ))}
      </div>
      
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
      
      <div className='ad-flexbox'>
       <img src='https://images.squarespace-cdn.com/content/v1/5563c88ae4b09841c644c503/1434239896172-7E9FHI09AORX8YEYL3TV/image-asset.png?format=750w' alt='' className='ad-image'></img>
       <div className='ad-text'>
         <h2 id="ad-title">ATTENTION WINNING JONES ALUMS</h2>
         <p className='aatextdesc'>Please fill out the short form linked below if you would like to 
           stay in touch with Jones College and new Jonesians!
         </p>
         <form target='_blank' action='https://docs.google.com/forms/d/1DIYgBE9YPs6osayKHLZpSseDUbmTAm9RMsUkHixa2yA/viewform'>
          <button className={mailinglstClicked ? "ad-button ad-buttonclicked" : "ad-button"} onMouseDown={()=>{setMailingLstClicked(true)}} onMouseUp={()=>{setMailingLstClicked(false)}}>Join the Mailing List!</button>
         </form>
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
      <form target='_blank' action='https://riceconnect.rice.edu/donation/support-jones-college?'>
        <button className={donateClicked ? "donate donateclicked" : "donate"} onMouseDown={()=>{setDonateClicked(true)}} onMouseUp={()=>{setDonateClicked(false)}}>DONATE</button>
      </form>
    </div>
  )
}

export default Associatesalumni