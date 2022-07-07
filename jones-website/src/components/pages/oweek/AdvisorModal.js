import React from 'react'
import './AdvisorModal.css'

function AdvisorModal(props) {

  return (
    <div className='advisor-modal'>
      <h3 className='a-group-name'>{props.name}</h3>
      <div className='a-grid'>
        {
            props.profiles.map((item, key) => {
              const bgImg = {
                backgroundImage: `url(${item.img})`,
                backgroundPosition:"center",
                backgroundSize: "cover",
              }
              return(
                <div key={key} className='a-container'>
                <div className='advisor-img' style={bgImg}/>
                <div style={{marginLeft:'1rem'}}>
                  <h4 className='a-name'>{item.name}</h4>
                  <p className='a-email'>{item.email}</p>
                  <p className='a-majors'>{item.major}</p>
                  <img src={item.collegetag} height={"24px"} alt="College Tag"/>
                </div>
              </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default AdvisorModal