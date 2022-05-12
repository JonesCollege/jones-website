import React from 'react';
import './O-Week.css';
import '../../../App.css';
import CoordCard from './CoordCard';
import Welcome from './Welcome';
import Banner from './Banner';
import Coords from './Coords';
import Advisors from './Advisors';
import Footer from '../../Footer';

export default function OWeek () {
    
    return (
        <div>
        <div className='oweek-container'>
            <div className='flex-row'>
                <div className='flex-column'>
                    <CoordCard className="card" img={"./images/des_mort.jpg"}/>
                    <CoordCard className="card" img={"./images/des_mort.jpg"}/>
                </div>
                <CoordCard className="card" img={"./images/des_mort.jpg"}/>
            </div>
            <div className='oweek-text-container'>
                <h1 className='oweek-h1'>
                    OWEEK
                </h1>
                <h3 className='oweek-h3'>
                    HI EVERYONE
                </h3>
                <p className='oweek-p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            
        </div>
        <Footer/>
    </div>
    )
}