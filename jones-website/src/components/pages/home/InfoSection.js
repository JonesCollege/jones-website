import React, { useState, useEffect, useMemo } from 'react';
import '../../../App.css';
import './InfoSection.css';
import backgroundImage from './images/gradient-min.png';

const bikeImage = '/images/home/IMG_3963.webp';
const jones_1 = '/images/home/jones_home_1.jpg';
const jones_2 = '/images/home/jones_home_2.jpg';
const jones_3 = '/images/home/jones_home_3.jpg';
const jones_4 = '/images/home/jones_home_4.jpg';

function InfoSection() {
  const [timeLeft, setTimeLeft] = useState({});

  const beerBikeDate = useMemo(() => new Date(2026, 3, 11, 9, 0, 0), []); 

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = beerBikeDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [beerBikeDate]);

  const halfStyle1 = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div>
      <div className='colored-div'>
        <div className='half-style1' style={halfStyle1}>
          <div className='collage-container'>
            <div className='collage-item collage-large'>
              <img src={jones_1} alt="coke cart" />
              <div className='collage-overlay'>JIBA</div>
            </div>
            <div className='collage-item collage-medium'>
              <img src={jones_2} alt="night ride" />
              <div className='collage-overlay'>Community</div>
            </div>
            <div className='collage-item collage-wide-top'>
              <img src={jones_3} alt="jones goes ice skating" />
              <div className='collage-overlay'>Tradition</div>
            </div>
            <div className='collage-item collage-small'>
              <img src={jones_4} alt="o week move in" />
              <div className='collage-overlay'>Pride</div>
            </div>
            <div className='collage-item collage-wide-bottom'>
              <img src={bikeImage} alt="beer bike" />
              <div className='collage-overlay'>Spirit</div>
            </div>
          </div>
        </div>
        <div className='half-style2'>
          <div className='content-wrapper'>
            <h1 className="header animate-fade-in">JONES COLLEGE</h1>
            <img 
              className="goat-image animate-fade-in-delay" 
              src="https://cdn-icons-png.flaticon.com/512/1886/1886905.png" 
              alt="Goat" 
            />
            <h2 className='header subheader animate-fade-in-delay-2'>EST. 1957</h2>

            <div className='buttons-wrap animate-fade-in-delay-4'>
              <a 
                href="https://riceconnect.rice.edu/donation/support-jones-college?fbclid=IwAR3rym2N0QS5e5j3QziVX2OoG_ts5oHdKrMQTcQBhxRHBbcKmHZHaY7Q6aA"
                className='button-home button-primary'
                target="_blank"
                rel="noreferrer"
              >
                <span>DONATE</span>
              </a>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScufBAZ8oyIadqTW9ZhbJ-8iEVlpIHBh8oXQy2c5MGcRq2vJQ/viewform"
                className='button-home button-secondary'
                target="_blank"
                rel="noreferrer"
              >
                <span>JOIN OUR MAILING LIST</span>
              </a>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className='countdown-container'>
            <div className='countdown-header'>🚴 BEER BIKE 2026 🍺</div>
            <div className='countdown-timer'>
              <div className='countdown-item'>
                <span className='countdown-number'>{timeLeft.days || 0}</span>
                <span className='countdown-label'>Days</span>
              </div>
              <div className='countdown-separator'>:</div>
              <div className='countdown-item'>
                <span className='countdown-number'>{String(timeLeft.hours || 0).padStart(2, '0')}</span>
                <span className='countdown-label'>Hours</span>
              </div>
              <div className='countdown-separator'>:</div>
              <div className='countdown-item'>
                <span className='countdown-number'>{String(timeLeft.minutes || 0).padStart(2, '0')}</span>
                <span className='countdown-label'>Min</span>
              </div>
              <div className='countdown-separator'>:</div>
              <div className='countdown-item'>
                <span className='countdown-number'>{String(timeLeft.seconds || 0).padStart(2, '0')}</span>
                <span className='countdown-label'>Sec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
