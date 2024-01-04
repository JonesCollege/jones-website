import React from 'react';
import '../../../App.css';
import InfoSection from './InfoSection';
import Lines from './Lines';
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
      <Lines />
      <Footer />
    </>
  );
}

export default Home;