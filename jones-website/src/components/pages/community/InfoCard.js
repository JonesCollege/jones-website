import React from 'react'
import './InfoCard.css'

const InfoCard = ({ title, email, people }) => {
  return (
    <div id='infocard'>
        <p id='infotitle'>{ title }</p>
        <p id='infoemail'>{ email }</p>
        {people.map((person) => (
            <p className='infoperson'>{person}</p>
        ))}
    </div>
  )
}

export default InfoCard