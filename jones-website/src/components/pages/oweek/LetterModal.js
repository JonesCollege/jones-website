import React from 'react'
import { IoClose } from 'react-icons/io5';
import './LetterModal.css'
import { CoordLetter } from './OWeekDataSheet';

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
        {CoordLetter.text.split(/\n/).map(line => <p className='letter-p' key={line}>{line}<br/></p>)}
        <div style={{padding:"1rem 0"}}>
           {CoordLetter.coordInfo.map((item, index) => {
            return(
                <div className='letter-contact' key={index}> {item.name}, {item.phone} </div>
            );
        })} 
        </div>
         
        <div className='letter-contact'>{CoordLetter.email}</div>
    </div>
  )
}

export default AdvisorModal