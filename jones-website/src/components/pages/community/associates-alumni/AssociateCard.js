import React from 'react'
import './AssociateCard.css'

const AssociateCard = ( {img, name, shortdesc, email, oncardclick} ) => {
  return (
    <div className='card' onClick={oncardclick}>
        <div className='img-wrapper'>
         <img src={img} alt="" className='associateimage'></img>
        </div>
        <h3 className='name'>{name}</h3>
        <p className='shortdesc'>{shortdesc}</p>
        <p className='email'><a href= 'mailto: {email}'>{email}</a></p>
    </div>
  )
}

export default AssociateCard