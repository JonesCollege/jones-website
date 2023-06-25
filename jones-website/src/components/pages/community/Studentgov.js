import React from 'react'
import { useState, useEffect } from 'react'
import { SocialIcon } from 'react-social-icons'
import { MdDownload } from 'react-icons/md'
import { IconContext } from 'react-icons'
import './Studentgov.css'
import CabinetCard from './studentgov/CabinetCard'
import PositionCard from './studentgov/PositionCard'
import AppointedPosList from './studentgov/AppointedPosList'
import { PresInfo } from './information/PresidentInfo'
import { CabinetInfo } from './information/CabinetInfo'
import { ElectedPos } from './information/ElectedPosInfo'
import { AppointedPos } from './information/AppointedPosInfo'
import { OtherPos } from './information/OtherPosInfo'
import Footer from '../../Footer'

const Studentgov = () => {
  const [formClick, setFormClick] = useState(false);
  useEffect(()=>{
    window.scrollTo({
        top: 0,
    });
},[])

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
            <h3 id='presname'>{PresInfo.name}, JONES '24</h3>
          </div>
        </div>
          <div id='prescontainer'>
            <p id='presintro'>Hey Jones! My name is Taya, and I'm the Jones president for the 2023-24 school year! 
            I'm so excited to have the opportunity to be president this year as we continue to strengthen our culture 
            and traditions while also reimagining the way in which the college is run. Community inclusion and 
            engagement are my biggest priorities, and I'm excited to see the ways in which Jones can be a home away 
            from home for all of its students.<br/><br/>College presidents wear a lot of hats, but the role's main 
            responsibilities are to act as a liaison between the college and university administration, represent 
            the will of the college across university government, and steer the goals and direction of the college's 
            government internally. With that being said, the best part of the job is interacting with Jonesians and 
            seeing the passion that all members of our community bring to a wide variety of issues. Whether you are a 
            new student, graduating senior, college alum, or anyone else, I hope that I am accessible enough to act as 
            a helping hand, campus resource guide, or a listener if you just need someone to talk to. Congrats on 
            finding the webpage of the best college at Rice University and, as always, JIBA!!!
              <br></br><br></br>
              - Taya Lasota '24 (she/her)
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
          <h3 className='postitle'>ELECTED POSITIONS 2023-2024</h3>
          <p id='electedposdesc'>are many other ways for Jonesians to contribute to life in the college. Some positions are elected, 
          and the rest are appointed by the President, Vice President, and other officers, usually in the spring.</p>
          <div className='posflexrow'>
            {ElectedPos.map((elected, idx) => (
              <PositionCard title={elected.title} email={elected.email} people={elected.people} key={idx}/>
            ))}
          </div>
      </div>

      <hr className='govdivide'></hr>

      <div id='appointedposheader'>
          <h3 className='postitle'>APPOINTED POSITIONS 2023-2024</h3>
          <p id='appointposdesc'>are many other ways for Jonesians to contribute to life in the college. Some positions are elected, 
          and the rest are appointed by the President, Vice President, and other officers, usually in the spring.</p>
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