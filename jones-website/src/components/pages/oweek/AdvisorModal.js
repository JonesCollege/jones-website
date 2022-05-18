import React from 'react'
import './AdvisorModal.css'

function AdvisorModal(props) {
  const bgImg = {
    backgroundColor: "red",
    backgroundImage: `url(${props.img})`,
}
  return (
    <div className='advisor-modal'>
      <div className='advisor-img' style={bgImg}/>
      <div>
        <h4 className='a-name'>NAME HERE</h4>
        <p className='a-email'>email@email.com</p>
        <p className='a-majors'>These are my many majors</p>
      </div>
      
    </div>
  )
}

export default AdvisorModal