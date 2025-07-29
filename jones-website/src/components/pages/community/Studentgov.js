import React from 'react'
import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { MdDownload } from 'react-icons/md'
import { IconContext } from 'react-icons'
import './css/Studentgov.css'
import { PositionCard, CabinetCard, AppointedPosList } from './StudentGovPositions'
import { PresInfo } from './INFO/PresidentInfo'
import { CabinetInfo } from './INFO/CabinetInfo'
import { ElectedPos } from './INFO/ElectedPosInfo'
import { AppointedPos } from './INFO/AppointedPosInfo'
import { OtherPos } from './INFO/OtherPosInfo'
import Footer from '../../Footer'
import { useScrollToTop } from '../../../utility'

const Studentgov = () => {
  const [formClick, setFormClick] = useState(false);
  useScrollToTop()

  return (
    <div>
      <div id='instaicon-wrap'>
        <SocialIcon url='https://www.instagram.com/mary_gibbs_jones_college/?hl=en' fgColor='white' bgColor='rgba(243, 248, 244, 255)' style={{ height: 100, width: 100 }} id='instaicon'/>
      </div>
      
      <h2 id='stugov'>STUDENT GOVERNMENT</h2>
      <div id='presflexrow-bg'>
        <div id='presflexrow'>
          <img src={PresInfo.img} alt='Jones President' id='presimg' />
          <div style={{paddingLeft: '3rem', paddingRight: '3rem'}}>
            <p id='prestitle'>PRESIDENT {PresInfo.year}</p>  
            <h3 id='presname'>{PresInfo.name}, JONES '25</h3>
            <h3 id='presinfo'>Computational and Applied Mathematics & Mathematics</h3>
            <h3 id='presinfo'>713-295-0550 | jonespresident@rice.edu</h3>
          </div>
        </div>
          <div id='prescontainer'>
            <p id='presintro'>Hey Jones! Congrats on finding the webpage of the winningest college at Rice University. I am Zack, the Jones president for 2025-26! <br/><br/> I could not be luckier to have been at Jones for these past few years, and it is my absolute joy to be able to use my senior year to serve as your president. <br/><br/> My biggest goal as president is to simply provide a space where you can feel comfortable and empowered to pursue whatever challenges, ideas, or goals you set for yourself during your time at Rice. Whether you see Jones as your closest family or just a nice place to relax away from other campus activities, I want Jones to be a positive part of your Rice experience. But of course I am one small part of the incredible team that keeps Jones running every day. The Jones J-team, cabinet members, committee heads, and our larger community of loving Jonesians all contribute to making this place so special. <br/><br/> Though that is the main job I care about, I am told by Rice that I apparently have other responsibilities as your president. This includes serving as liaison between the college government and university administration, representing the will of Jonesians at a university-wide level government, and steering the direction of the college's government internally. And why do all this? Because it means I can be privy to the passions of each member of our community and provide them with the platform to address a medley of issues. <br/><br/> Regardless of whether you’re a new face on campus, a seasoned Rice vet, a former and forever Jonesian, or someone looking to transfer to a better college, I sincerely hope that I will be able to be there for you however you need. Never hesitate to reach out with absolutely anything you may need. Without further adieu, JIBA!!!
              <br></br><br></br>
              - Zack Donovan '26 (he/him)
            </p>
          </div>

      </div>

      <div id='cabpos-flexrow'>
        <div id='aboutcab'>
          <h3 id='cabpos'>CABINET POSITIONS</h3>
          <p id='cabposintro'>The Jones Executive Cabinet is the entirely student-run and student-elected system of college governance. 
            The purpose of Cabinet is to provide an atmosphere of social and intellectual growth in the college, plan college activities, 
            and make sure that Jones runs smoothly. The Cabinet is legislated by the Jones Constitution, and elections are held in the spring. 
          </p>
        </div>
        <div id='cabfb-flexcol'>
          <p>Have any feedback for Cabinet?</p>
          <form target='_blank' action='https://goo.gl/forms/qOgEch2pH41iOdPo2'>
            <button id={formClick ? 'cabfbclick' : ''} onMouseDown={()=>{setFormClick(true)}} onMouseUp={()=>{setFormClick(false)}}>Form Link</button>
          </form>
        </div>
      </div>

      {/* REQUIRES ALL STUDENT GOVERNMENT IMAGES BE PLACED IN PUBLIC > IMAGES */}
      <div id='stugovflexrow'>
        {CabinetInfo.map((stugov, idx) => (
          <CabinetCard name={stugov.name} pronouns={stugov.pronouns} position={stugov.position} major={stugov.major}
                    img={stugov.img} email={stugov.email} shortdesc={stugov.shortdesc} objpos={stugov.objpos}
                    maxsize={stugov.maxsize} key={idx}/>
        ))}
      </div>

      <hr className='govdivide'></hr>

      <div id='electedpos'>
          <h3 className='postitle'>ELECTED POSITIONS 2024-2025</h3>
          <p id='electedposdesc'>are a great way for Jonesians to contribute to life in the college. Anyone is eligible to run
          for these positions and they are voted on by the entirety of the Jones student body.</p>
          <div className='posflexrow'>
            {ElectedPos.map((elected, idx) => (
              <PositionCard title={elected.title} email={elected.email} people={elected.people} key={idx}/>
            ))}
          </div>
      </div>

      <hr className='govdivide'></hr>

      <div id='appointedposheader'>
          <h3 className='postitle'>APPOINTED POSITIONS 2024-2025</h3>
          <p id='appointposdesc'>are another way to get involved. These positions are selected by the President, Chief Justice, 
          IVP, and EVP each year, usually in the spring.</p>
      </div>  
        {AppointedPos.map((pos, idx) => (
        <AppointedPosList position={pos.position} info={pos.info} key={idx}/>
      ))}

      <div id='otherpos' className='postitle'>Other Positions</div>

      <div className='posflexrow'>
        {OtherPos.map((position, idx) => (
          <PositionCard title={position.title} email={position.email} people={position.people} key={idx}/>
        ))}
      </div>

      <div id='constitution'>
        <div id='constflex'>
          <h3 className='postitle'>The Constitution</h3>
          <p id='constitutiontxt'>The Jones Constitution details the laws of our land. It’s the way we make most of our decisions, 
            and how we put people in charge. From room draw procedures to the most eccentric of Presidential duties, 
            the Constitution has got it all. There are over 35 pages of carefully worded text to guide our college’s 
            activity. The College Parliamentarian is responsible for updating and changing the Constitution and 
            its <a id='bylaws' title='https://docs.google.com/document/d/1sBOXhZnGkC-nO3L14g2DziKVOoi6bzKpwv7YbY5eYj8/pub' 
            href='https://docs.google.com/document/d/1sBOXhZnGkC-nO3L14g2DziKVOoi6bzKpwv7YbY5eYj8/pub' target="_blank" 
            rel="noopener noreferrer">Bylaws</a> as 
            he or she sees fit. The Constitution is broken down into six main sections:</p>
          </div>
          <div id='downloadwrapper'>
            <a href='https://docs.google.com/document/d/1BLsb4rq-Fcj2wgF4A0kCxWFqpW3vI1I_s96o3qxUnug/pub' target="_blank" rel="noopener noreferrer">
              <IconContext.Provider value={{ size: 200 }}>
                <MdDownload id='downloadbutton' />
              </IconContext.Provider>
            </a>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Studentgov