import React from 'react'
import './DescriptiveCard.css'
import { FaTimes } from 'react-icons/fa'

const DescriptiveCard = ({ img, name, desc }) => {
  return (
    <div>
        <div className='desccard-flex'>
            <img src={img} alt='' className='descimage'></img>
            <div className='dinfo'>
                <h2 className='dname'>{name}</h2>
                <br></br>
                <p className='ddesc'>{desc}</p>
            </div>
        </div>
        {/* <FaTimes className='xbutton'/> */}
    </div>
  )
}

export default DescriptiveCard