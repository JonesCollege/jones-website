import React from 'react';
import './O-Week.css';
import '../../../App.css';
import Welcome from './Welcome';
import Banner from './Banner';
import Coords from './Coords';
import Advisors from './Advisors';
import Footer from '../../Footer';

export default function OWeek () {
    
    return (
        <>
        <Welcome/>
        <Banner/>
        <Coords/>
        <Advisors/>
        <Footer/>
        </>
    
    )
}