import React from 'react';
import './email_michelle.css'; 

function EmailMichelle() {
  return (
    <div className="main-txt">
      <div className="centered-text">
        <h1>To reserve a room please email our college coordinator, Michelle Bennack at <span style={{ textDecoration: 'underline' }}>mrb4@rice.edu</span>. Please include your name (first and last), the date and location of your room reservation, and whether it is recurring.</h1>
        <p style={{ marginTop: '20px'}}>We apologize for any inconvenience!</p>
      </div>
    </div>
  );
}

export default EmailMichelle;