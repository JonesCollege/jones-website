import React from 'react'
import './AssociateCard.css'

const AssociateCard = ( {img, name, desc, email} ) => {
  return (
    <div className='card'>
        <div className='img-wrapper'>
         <img src={img} alt="" className='image'></img>
        </div>
        <h3 className='name'>{name}</h3>
        <p className='desc'>{desc}</p>
        <p className='email'><a href= 'mailto: {email}'>{email}</a></p>
    </div>
  )
}

export default AssociateCard