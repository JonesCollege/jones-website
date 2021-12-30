import React from 'react';
import '../App.css';
import { Button } from './Button';
import './InfoSection.css';


function InfoSection() {
    return (
        <div className='info-container'>
          {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
          <h1>JONES COLLEGE</h1>
          <p>Winning since 1957</p>
          <div className='info-btns'>
            <button className='banner-btn'>
              O-Week
            </button>
            <button className='banner-btn'>
              Donate
            </button>
          </div>
        </div>
      );
    }

export default InfoSection
