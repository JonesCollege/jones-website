import React from 'react';
import './PeerResources.css';
import {Fellows} from './PeerNames';
import AcademicAdvisors from './AcademicAdvisors';
import AcademicFellows from './AcademicFellows';
import FellowsGrid from './FellowsGrid';
import HealthAdvisors from './HealthAdvisors';
import PeerCareerAdvisors from './PeerCareerAdvisors';
import StriveLiasons from './StriveLiasons';


function PeerResources() {
  return (
    <div className='peer-container'>
      <h1 className='peer-title'>PEER RESOURCES</h1>
     <AcademicFellows/>
    </div>
  );
}

export default PeerResources;
