import React from 'react'
import './StugovCard.css'

const StugovCard = ( {img, name, shortdesc, email, oncardclick} ) => {
  return (
    <div className='sgcard' onClick={oncardclick}>
        <div className='sgimg-wrapper'>
         <img src={img} alt="" className='stugovimage'></img>
        </div>
        <h3 className='sgname'>{name}</h3>
        <p className='sgshortdesc'>{shortdesc}</p>
        <p className='sgemail'><a href= 'mailto: {email}'>{email}</a></p>
    </div>
  )
}

export default StugovCard