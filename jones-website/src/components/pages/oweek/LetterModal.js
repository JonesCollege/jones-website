import React from 'react'
import { IoClose } from 'react-icons/io5';
import './css/LetterModal.css'
import { CoordLetter } from './INFO/OWeekDataSheet';
import { insertLineBreak } from '../../../utility';

function AdvisorModal({closeModal}) {
  return (
    <div className='letter-modal'>
        <button className='exit-button' onClick={closeModal}>
            <IoClose className='exit-icon'/>
        </button>
        <h1 className='letter-h1'>
            OWEEK
        </h1>
        <h3 className='letter-h3'>
            WELCOME FUTURE
        </h3>
        <p className='letter-p'>
            {insertLineBreak(CoordLetter.text)}
        </p>
        <div style={{padding:"1rem 0"}}>
           {CoordLetter.coordInfo.map((item, index) => 
                <div className='letter-contact' key={index}> {item.name}, {item.phone} </div>
        )} 
        </div>
        <div className='letter-contact'>{CoordLetter.email}</div>
    </div>
  )
}

export default AdvisorModal