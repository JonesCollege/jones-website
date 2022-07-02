import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import InfoSection from '../InfoSection';
import "./Home.css";

function Home() {
  return (
    <>
      <InfoSection />
      <a target="_blank" rel="noreferrer" href="https://riceconnect.rice.edu/donation/support-jones-college?fbclid=IwAR3rym2N0QS5e5j3QziVX2OoG_ts5oHdKrMQTcQBhxRHBbcKmHZHaY7Q6aA">
        <button className='donate-button donate-text'>
          DONATE 
        </button>
      </a>
      <Footer />
    </>
  );
}

export default Home;