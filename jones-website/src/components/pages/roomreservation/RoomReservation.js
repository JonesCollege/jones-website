// import React, { useState, useRef, useEffect } from 'react';
import React from 'react';
// import moment from 'moment';
import './RoomReservation.css'; 
import Footer from '../../Footer';


function RoomReservation() {
  return (
  <div className='room-reservation-container'>
    <h1 className="header-text">RESERVE A ROOM</h1>
    <p className='description-text'>To create a room reservation, fill out the google form on the left and click submit. This will create an event on the Jones Room Reservation calendar. You may have to refresh the page once you click submit to view your newly created event on the calendar.</p>
    <p className='description-text-'>If you would like to make a recurring room reservation or want to reserve commons, please reach out to our secretaries at <a href="mailto:jonessecretaries@gmail.com">jonessecretaries@gmail.com</a>.</p>
    <div className='display-container'>
      <div className="embedded-content">
      <div className="iframe-container form-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeCvoyyUmPffxss_-uafKtXXwweyhpZ2FIP3LQ2kbFiki8MSA/viewform?embedded=true"
          className="responsive-iframe"
          title="Google Form"
        >
          Loading…
        </iframe>
      </div>
      <div className="iframe-container calendar-container">
        <iframe 
          src="https://calendar.google.com/calendar/embed?src=jonessecretaries%40gmail.com&ctz=America%2FChicago" className="responsive-iframe"
          title="Google Calendar"
        >
        Loading...
        </iframe>
      </div>
    </div>
    </div>
    <Footer />
  </div>
  );
}

export default RoomReservation;

