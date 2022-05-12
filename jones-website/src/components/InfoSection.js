import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './InfoSection.css';


function InfoSection() {
    return (
        <div className='info-container'>
          {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
          <h1>JONES COLLEGE</h1>
          {/* <p>Winning since 1957</p>
          <div className='info-btns'>
            <Link to='/o-week'>
              <button className='banner-btn'>
                O-Week
              </button>
            </Link>
            
            <button className='banner-btn'>
              Donate
            </button>
          </div> */}
        </div>
      );
    }

export default InfoSection
