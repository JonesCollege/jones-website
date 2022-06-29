import React from 'react'
import './PositionCard.css'

const PositionCard = ({ title, email, people }) => {
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

export default PositionCard