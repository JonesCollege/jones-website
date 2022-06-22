import React from 'react'
import './DescriptiveCard.css'

const DescriptiveCard = ({ img, name, longdesc, closeonclick }) => {
  return (
    <div>
      <div className='modal-background' onClick={closeonclick}>
      </div>
      <div className='desccard-flex'>
          <img src={img} alt='' className='descimage'></img>
          <div className='dinfo'>
              <h2 className='dname'>{name}</h2>
              <br></br>
              <p className='ddesc'>{longdesc}</p>
          </div>
          <button className='exit-button' onClick={closeonclick}>X</button>
      </div>
    </div>
  )
}

export default DescriptiveCard