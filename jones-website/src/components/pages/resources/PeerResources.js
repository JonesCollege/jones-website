import React, { useEffect } from 'react';
import './PeerResources.css';
import AcademicAdvisors from './AcademicAdvisors';
import AcademicFellows from './AcademicFellows';
import FellowsGrid from './FellowsGrid';
import HealthAdvisors from './HealthAdvisors';
import PeerCareerAdvisors from './PeerCareerAdvisors';
import StriveLiasons from './StriveLiasons';
import Footer from '../../Footer';


function PeerResources() {
  useEffect(()=>{
    window.scrollTo({
        top: 0,
    });
},[])
  return (
    <div>
      <div className='peer-container'>
        <h1 className='peer-title'>PEER RESOURCES</h1>
        <AcademicFellows/>
        <FellowsGrid/>
        <AcademicAdvisors/>
        <HealthAdvisors/>
        <StriveLiasons/>
        <PeerCareerAdvisors/>
      </div>
      <Footer/>
    </div>
    
  );
}

export default PeerResources;
