import React, { useState } from 'react';
import '../../../App.css';
import './InfoSection.css';
import backgroundImage from './images/gradient-min.png';
import bikeImage from './images/IMG_3963.webp';
import bikeImageHover from './images/IMG_3484.webp';
import { useResizeWidth } from '../../../utility';

function InfoSection() {
  const [resize, setResize] = useState(false)
  useResizeWidth(460, setResize)

  const halfStyle1 = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div>
      <div className='colored-div'>
        {
          !resize &&  
          <div className='half-style1' style={halfStyle1}>
            <img
                src={bikeImage}
                alt="Jones Beer Bike Team"
                className='centered-image-home'
                onMouseOver={(e) => (e.target.src = bikeImageHover)}
                onMouseOut={(e) => (e.target.src = bikeImage)}
              />
          </div>
        }
        
        <div className='half-style2'>
          <h1 className="header">JONES COLLEGE</h1>
          <img className="goat-image" src="https://cdn-icons-png.flaticon.com/512/1886/1886905.png" alt="Goat" />
          <h2 className='header'>EST. 1957</h2>
          <div className='buttons-wrap'>
            <a href="https://riceconnect.rice.edu/donation/support-jones-college?fbclid=IwAR3rym2N0QS5e5j3QziVX2OoG_ts5oHdKrMQTcQBhxRHBbcKmHZHaY7Q6aA"
              className='button-home'
              target="_blank"
              rel="noreferrer">DONATE</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScufBAZ8oyIadqTW9ZhbJ-8iEVlpIHBh8oXQy2c5MGcRq2vJQ/viewform"
              className='button-home button-left-margin'
              target="_blank"
              rel="noreferrer">JOIN MAILING LIST</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection

