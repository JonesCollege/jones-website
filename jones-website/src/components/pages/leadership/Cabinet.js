import React from 'react'
import {CabinetPositions} from './Positions'
import Footer from '../../Footer';
import './Cabinet.css'

function Cabinet() {
    return (
        <>
        <div className='cabinet-container'>
            <h1 className='cabinet-title'>Jones Cabinet</h1>
            <p>The Jones Executive Cabinet is the entirely student-run and student-elected system of college governance. 
                The purpose of Cabinet is to provide an atmosphere of social and intellectual growth in the college, plan 
                college activities, and make sure that Jones runs smoothly. The Cabinet is legislated by the Jones 
                Constitution, and elections are held in the spring. Cabinet members always welcome fellow students' 
                feedback on anything related to Jones or Rice, so be sure to get to know them!</p>
            <br/>
            <p className='feedback'>Have any feedback for Cabinet? Use <a href='https://goo.gl/forms/qOgEch2pH41iOdPo2' className='links' target={'blank'}>this form</a> to help improve Jones!</p>
            <div className='president-container'>
            <div className='president-desc-box'>
            <h2 className='president-title'>President:</h2>
            <p className='president-desc-txt'>Represents Jones at all campus-wide functions, oversee Cabinet and Appointed Positions, presides over all college meetings, and ensures Jones runs smoothly.</p>
            </div>
            <h3 className='president-name'>Aaron Pathak</h3>
            <div className='president-img'/>
            <p>Hello and welcome to Jones!</p>
            <br />
            <p>I'm Aaron Pathak, a senior from Dallas, Texas and Jones College President.</p>
            <br />
            <p>The residential college system is the hallmark of undergraduate life at Rice, with each college having its own 
                government, traditions, and culture. Thankfully for Jonesians, we happen to have been placed in the college 
                with the best government, the best traditions, and the best culture.</p>
            <br />
            <p>As President, I wear many hats and go to (and run) many meetings. It's my job to make sure the Jones government 
                is running properly by working with the other elected and appointed positions to benefit the college. I host 
                Cabinet every other week for all of Jones to learn about and discuss important issues facing us as students, 
                members of the Rice community, and friends- as well as enjoy awesome food from the Adult team. I also represent 
                Jones on a campus level as one of our college's voices in the Student Association (campus-wide student government), 
                and through weekly meetings with administrators. All this is to say that if you have any issue or suggestion you 
                would like the college or administration to hear, talk to me! My role exists to make life for all Jonesians the 
                best it can be. I am the official Jones listener, spokesperson, and cheerleader.</p>
            <br />
            <p>There are many ways for YOU to get involved with Jones! Make sure to keep an eye out for emails from various 
                Jonesians with opportunities to engage in the community, or if you'd like to form a new group or new event that 
                doesn't currently exist at Jones, go for it! If you need any help or guidance on what the best ways to start 
                getting involved are, please reach out to me or any member of the Jones cabinet- we are all so excited to work with you! </p>
            <br />
            <p>I am proud to serve the Jones family, and I look forward to a successful year. If you have any questions, suggestions, or 
                deep life thoughts, please contact me! Don't hesitate to text, email, or track me down in person!</p>
            <br />
            <p>JIBA!</p>
            <br />
            <p>Aaron Pathak</p>
            <p>ap68@rice.edu</p>
            <p>thejonespresident@gmail.com</p>
            </div>
            <div className='cabinet-box-container'>
            {
                CabinetPositions.map((item, index) => {
                    return(
                        <li className='cabinet-box' key={index}>
                        <div className='cabinet-desc'>
                        <h4 className='cabinet-box-title'>{item.position}:</h4>
                        <p className='cabinet-box-txt'>{item.desc}</p>
                        </div>
                        <div className='cabinet-contact'>
                        <h3 className='cabinet-box-name'>{item.name}</h3>
                        <p className='cabinet-box-txt'>{item.email}</p>
                        </div>
                    </li>
                    );
                })
            }
            </div>   
        </div>  
        <Footer />
        </>
    )
}

export default Cabinet
