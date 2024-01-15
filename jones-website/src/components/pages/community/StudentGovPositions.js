import React from 'react'
import './css/AppointedPosList.css'
import './css/PositionCard.css'
import './css/CabinetCard.css'


export const AppointedPosList = ({ position, info }) => {
  return (
    <div id='appointposflex'>
        <p id='appointedposition'>{position}</p>
        <div id='appointposinnerflex'>
            {info.map((attribute, idx) => (
                <PositionCard title={attribute.title} email={attribute.email} people={attribute.people} key={idx}/>
            ))}
        </div>
    </div>
  )
}

export const PositionCard = ({ title, email, people }) => {
  return (
    <div id='infocard'>
        <p id='infotitle'>{ title }</p>
        <p id='infoemail'>{ email }</p>
        {people.map((person) => (
            <p className='infoperson' key={person}>{person}</p>
        ))}
    </div>
  )
}

export const CabinetCard = ( {name, pronouns, position, major, img, email, shortdesc, objpos, maxsize} ) => {
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