import React from 'react'
import './AssociateCard.css'

const AssociateCard = ( {img, name, shortdesc, email, oncardclick, objpos, maxsize} ) => {
  return (
    <div className='accard' onClick={oncardclick}>
        <div className='acimg-wrapper'>
         <img src={img} alt="" className='acassociateimage' style={{ objectPosition: objpos, maxWidth: maxsize, maxHeight: maxsize }}></img>
        </div>
        <h3 className='acname'>{name}</h3>
        <p className='acshortdesc'>{shortdesc}</p>
        <p className='acemail'>{email}</p>
    </div>
  )
}

export default AssociateCard