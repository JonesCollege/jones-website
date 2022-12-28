import React from 'react';
import '../../../App.css';
import InfoSection from './InfoSection';
import Footer from '../../Footer';
import "./Home.css";
import jQuery from 'jquery';

function Home() {
  jQuery.ajax({
    url: "https://www.googleapis.com/calendar/v3/calendars/jonessecretaries@gmail.com/events?key=[AIzaSyCA4ZVrIL1opJv1Nx3Da3coFRcexl_4oo8]",
    type: "GET",
    dataType: "json",
    // async lets the data stay saved after the inital call, otherwise the data will be removed after the success call
    success: function(data) {
      console.log(data);
    }
      });

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