import React from 'react'
import './css/DescriptiveCard.css'
import { MdClose } from 'react-icons/md'
import { IconContext } from 'react-icons'

const DescriptiveCard = ({ img, name, longdesc, closeonclick, objpos, maxsize }) => {
  return (
    <div>
      <div className='modal-background' onClick={closeonclick}>
      </div>
      <div className='desccard-flex'>
          <img src={img} alt='' className='descimage' style={{ objectPosition: objpos, maxWidth: maxsize, maxHeight: maxsize }}></img>
          <div className='dinfo'>
              <h2 className='dname'>{name}</h2>
              <br></br>
              <p className='ddesc'>{longdesc}</p>
          </div>
          <IconContext.Provider value={{ size: 35 }}>
            <MdClose className='exit-button' onClick={closeonclick}/>
          </IconContext.Provider>
      </div>
    </div>
  )
}

export default DescriptiveCard