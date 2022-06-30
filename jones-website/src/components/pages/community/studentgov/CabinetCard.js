import React from 'react'
import './CabinetCard.css'

const CabinetCard = ( {name, pronouns, position, major, img, email, shortdesc, objpos, maxsize} ) => {
  return (
    <div id='sgcard'>
      <div id='sgcardinner'>
        <div id='sgcardfront'>
          <div id='sgimg-wrapper'>
          <img src={img} alt="" id='stugovimage' style={{ objectPosition: objpos, maxWidth: maxsize, maxHeight: maxsize}}></img>
          </div>
          <h3 id='sgname'>{name}</h3>
          <p id='sgposition'>{position}</p>
          <p><a href= 'mailto: {email}' id='sgemail'>{email}</a></p>
        </div>

        <div id='sgcardback'>
          <p id='sgbname'>{name}</p>
          <p id='sgbpronouns'>{pronouns}</p>
          <p id='sgbmajor'>{major}</p>
          <p id='sgbdesc'>DESCRIPTION</p>
          <p id='sgbshortdesc'>{shortdesc}</p>
        </div>
      </div>
    </div>
  )
}

export default CabinetCard