import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import InfoSection from '../InfoSection';
import "./Home.css";

function Home() {
  return (
    <>
      <InfoSection />
      {/* <Cards /> */}
      <a target="_blank" href="https://riceconnect.rice.edu/donation/support-jones-college?fbclid=IwAR3rym2N0QS5e5j3QziVX2OoG_ts5oHdKrMQTcQBhxRHBbcKmHZHaY7Q6aA">
        <button className='donate-button donate-text'>
          DONATE 
        </button>
      </a>
      <Footer />
    </>
  );
}

export default Home;