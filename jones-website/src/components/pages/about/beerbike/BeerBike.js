import React from 'react'
import {BeerBikeCoords, BikeCaptains, ChugCaptains} from './BeerBikeLeads'
import Footer from '../../../Footer';
import './BeerBike.css'

function BeerBike() {
    return (
        <>
        <div className='beerbike-container'>
            <h1>Beer Bike</h1>
            <h1>16</h1>
            <h1>wins</h1>
            <h3>jones wins again.</h3>
            <p>There is a day when all the other colleges come together to celebrate Jones' winningness. 
                A grueling test of speed, endurance, and gag reflex control comes on the heels of a 
                week-long foray into bliss and happiness. The stuff of legends and a cornerstone of Rice life, 
                Beer Bike is our day.</p>
            <p>At its core, Beer Bike is a relay race of ten bikers on three teams: men, women, and alumni. 
                These bikers are joined by a team of ten chuggers, who stand on the famed Jones platform near 
                the bike pit as each bikes come in and must chug water before the next biker can leave the pit.</p>
            <p>But Beer Bike is more than that. The entire week leading up to it, Willy Week, is a celebration 
                of life at Jones and life at Rice. Jones will celebrate with parties and activities, such as 
                Night Ride and water balloon filling contests. And we will also partake in the main phase of 
                open intercollege jack season. Although you probably won't see or hear them, rest assured that 
                somewhere out there, a Jones force is spreading mischief. The Beer Bike Race itself only comes 
                after a morning of debauchery and one of the biggest water balloon fights in the world.</p>
            <p>Biking and chugging for Jones is an honor, one that all should attempt. Jones Fast Women and 
                Hard Men are revered on campus for their skill on the bike.</p>
            <div className='lead-container'>
                <h3>Beer Bike Coords 2021-2022</h3>
                <p>beerbikejones@gmail.com</p>
                <div className='lead-flex'>
                    {BeerBikeCoords.map((item, index) => {
                        return(
                        <li className='beerbike-li' key = {index}>
                            <p>{item.name}</p>
                            <p>{item.email}</p>
                        </li>  
                        );
                    })}
                </div>
            </div>
            <div className='lead-container'>
                <h3>Bike Team Captains 2021-2022</h3>
                <p>jonesbiketeam@gmail.com</p>
                <div className='lead-flex'>
                    {BikeCaptains.map((item, index) => {
                        return(
                        <li className='beerbike-li' key = {index}>
                            <p>{item.name}</p>
                            <p>{item.email}</p>
                        </li>  
                        );
                    })}
                </div>
            </div>
            <p>Interested in biking?  E-mail the Jones Bike Team Captains at jonesbiketeam@gmail.com to get on the bike team listserv!</p>
            <div className='lead-container'>
                <h3>Chug Team Captains 2021-2022</h3>
                <div className='lead-flex'>
                    {ChugCaptains.map((item, index) => {
                        return(
                        <li className='beerbike-li' key = {index}>
                            <p>{item.name}</p>
                            <p>{item.email}</p>
                        </li>  
                        );
                    })}
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default BeerBike
