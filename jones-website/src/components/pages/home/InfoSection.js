import React from 'react';
import '../../../App.css';
import './InfoSection.css';
import backgroundImage from './gradient.png';
import bikeImage from './IMG_3963.JPG';

function InfoSection() {
  const coloredDivStyle = {
    display: 'flex',
    height: '600px',
  };

  const halfStyle1 = {
    flex: 1,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const halfStyle2 = {
    flex: 1,
    backgroundColor: '#f3f8f4',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', 
    position: 'relative',
  };

  const centeredImageStyle = {
    width: '70%', 
    height: 'auto', 
    borderRadius: '12px'
  };

  const buttonStyle = {
    position: 'absolute',
    bottom: '15px',
    cursor: 'pointer',
    padding: '20px',
    borderRadius: '15px',
    fontFamily: 'futuraHeavy',
    left: '70px',
    textDecoration: 'none',
    transition: 'background-color 0.3s, color 0.3s',
    color: 'black',
    backgroundColor: 'white',
  };

  return (
    <div>
      <div style={coloredDivStyle}>
        <div style={halfStyle1}>
          <img src={bikeImage} alt="bike team picture" style={centeredImageStyle}/>
        </div>
        <div style={halfStyle2}>
        <a href="https://riceconnect.rice.edu/donation/support-jones-college?fbclid=IwAR3rym2N0QS5e5j3QziVX2OoG_ts5oHdKrMQTcQBhxRHBbcKmHZHaY7Q6aA"
            style={{ ...buttonStyle }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#8CC292')}
            onMouseOut={(e) => (e.target.style.backgroundColor = 'white')}
            target="_blank">DONATE</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScufBAZ8oyIadqTW9ZhbJ-8iEVlpIHBh8oXQy2c5MGcRq2vJQ/viewform"
            style={{ ...buttonStyle, left: 'auto', right: '50px' }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#8CC292')}
            onMouseOut={(e) => (e.target.style.backgroundColor = 'white')}
            target="_blank">JOIN MAILING LIST</a>
          <h1 className="header">JONES COLLEGE</h1>
          <img className="goat-image" src="https://cdn-icons-png.flaticon.com/512/1886/1886905.png" alt="goat image" />
          <h2 className='header'>EST. 1957</h2>
        </div>
      </div>
    </div>
  );
}

export default InfoSection

