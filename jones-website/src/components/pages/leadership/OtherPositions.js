import React from 'react'
import {ElectedPositions, AppointedPositions} from './Positions.js'
import Footer from '../../Footer';

function OtherPositions() {

    //sort positions alphabetically
    const appointedPositions = AppointedPositions.sort((a,b)=> (a.position > b.position ? 1 : -1));
    
    return (
        <>
        <div>
            <h1>Elected and Appointed Positions</h1>
            <h2>Elected Positions 2021-2022</h2>
            {
                ElectedPositions.map((item, index) => {
                    return(
                        <li key={index}>
                        <h4>{item.position}</h4>
                        <p>{item.name}</p>
                        <p>{item.desc}</p>
                        <p>{item.email}</p>
                    </li>
                    );
                })
            }
            <h2>Appointed Positions 2021-2022</h2>
            {
                appointedPositions.map((item, index) => {
                    return(
                        <li key={index}>
                        <h4>{item.position}</h4>
                        <p>{item.name}</p>
                        <p>{item.desc}</p>
                        <p>{item.email}</p>
                    </li>
                    );
                })
            }
        </div>
        <Footer />
        </>
    )
}

export default OtherPositions
