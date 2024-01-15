import React, { useEffect } from 'react';
import './css/PeerResources.css';
import PeerAcademicAdvisors from './PeerAcademicAdvisors';
import Fellows from './Fellows';
import RiceHealthAdvisors from './RiceHealthAdvisors';
import PeerCareerAdvisors from './PeerCareerAdvisors';
// import StriveLiasons from './StriveLiasons';
import Footer from '../../Footer';
import { useScrollToTop } from '../../../utility'


function PeerResources() {
  useScrollToTop()
  return (
    <div>
      <div className='peer-container'>
        <h1 className='peer-title'>PEER RESOURCES</h1>
        <Fellows/>
        <PeerAcademicAdvisors/>
        <RiceHealthAdvisors/>
        {/* <StriveLiasons/> */}
        <PeerCareerAdvisors/>
      </div>
      <Footer/>
    </div>
    
  );
}

export default PeerResources;
