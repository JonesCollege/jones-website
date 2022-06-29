import React from 'react'
import PositionCard from './PositionCard'
import './AppointedPosList.css'

const AppointedPosList = ({ position, info }) => {
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

export default AppointedPosList