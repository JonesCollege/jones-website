import React from 'react'
import { SocialIcon } from 'react-social-icons'
import './Studentgov.css'
import { GovCard } from './StugovCard'

const Studentgov = () => {
  return (
    <div>
      <div id='instaicon-wrap'>
        <SocialIcon url='https://www.instagram.com/mary_gibbs_jones_college/?hl=en' fgColor='white' bgColor='rgba(243, 248, 244, 255)' style={{ height: 100, width: 100 }} id='instaicon'/>
      </div>
      
      <h2 id='stugov'>STUDENT GOVERNMENT</h2>
      <div id='presflexrow-bg'>
        <div id='presflexrow'>
          <img src={require('./images/danprespic.jpg')} alt=''></img>
          <div>
            <h3 id='presname'>DAN HELMECI, JONES'23</h3>
            <p id='prestitle'>PRESIDENT 2022-2023</p>
            <p id='presintro'>Hey Jones! My name is Dan, and I'm the Jones president for the 2022-23 school year! 
              I'm so excited to have the opportunity to be president this year, as we are hoping to 
              both revitalize many of our favorite traditions and cultures following COVID while also 
              reimagining the way in which the college is run. Community inclusion is my biggest 
              priority this year, and I'm excited to see the ways in which Jones can continue to be a 
              home away from home for all of its students. <br></br>College presidents wear a lot of hats, but 
              the role's main responsibilities are to act as a liaison between the college and university 
              administration, represent the will of the college across university government, and steer the 
              goals and direction of the college's government internally. With that being said, the best 
              part of the job is interacting with Jonesians and seeing the passion that all members of our 
              community bring to a wide variety of issues. Whether you are a new student, graduating senior, 
              college alum, or anyone else, I hope that I am accessible enough to act as a helping hand, campus 
              resource guide, or a listener if you just need someone to talk to. Congrats on finding the webpage 
              of the best college at Rice University and, as always, JIBA!!!
              <br></br><br></br>
              - Dan Helmeci '23 (he/him)
            </p>
          </div>
        </div>
      </div>

      <div id='cabpos-flexrow'>
        <div id='cabfb-flexcol'>
          <p>Have any feedback for Cabinet?</p>
          <button>Form Link</button>
        </div>
        <div id='aboutcab'>
          <h3 id='cabpos'>CABINET POSITIONS</h3>
          <p id='cabposintro'>The Jones Executive Cabinet is the entirely student-run and student-elected system of college governance. 
            The purpose of Cabinet is to provide an atmosphere of social and intellectual growth in the college, plan college activities, 
            and make sure that Jones runs smoothly. The Cabinet is legislated by the Jones Constitution, and elections are held in the spring. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Studentgov