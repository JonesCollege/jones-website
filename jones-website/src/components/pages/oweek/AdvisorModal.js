import React from 'react'
import './AdvisorModal.css'

function AdvisorModal(props) {
  const bgImg = {
    backgroundColor: "red",
    backgroundImage: `url(${props.img})`,
}
  return (
    <div className='advisor-modal'>
      <div className='a-grid'>
        <div className='a-container'>
          <div className='advisor-img' style={bgImg}/>
          <div>
            <h4 className='a-name'>NAME HERE</h4>
            <p className='a-email'>email@email.com</p>
            <p className='a-majors'>These are my many majors</p>
            <img src='./college-tags/baker_tag-removebg-preview.png' height={"24px"}/>
          </div>
        </div>
        
        <div className='a-container'>
          <div className='advisor-img' style={bgImg}/>
          <div>
            <h4 className='a-name'>NAME HERE</h4>
            <p className='a-email'>email@email.com</p>
            <p className='a-majors'>These are my many majors</p>
            <img src='./college-tags/baker_tag-removebg-preview.png' height={"24px"}/>
          </div>
        </div>

        <div className='a-container'>
          <div className='advisor-img' style={bgImg}/>
          <div>
            <h4 className='a-name'>NAME HERE</h4>
            <p className='a-email'>email@email.com</p>
            <p className='a-majors'>These are my many majors</p>
            <img src='./college-tags/baker_tag-removebg-preview.png' height={"24px"}/>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default AdvisorModal