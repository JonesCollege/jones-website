import React, {useState} from "react";
import { OAuthSignIn } from "./PostEvent";
import './ReservationForm.css'; 

const rooms = {
    'Commons':'0dc519d2efedb636f29ca28335aee7f34b90095d46507b879e92af4dbcf07e68@group.calendar.google.com',
    'Jitchen': 'c1135169eaaa09a3678e23a7ae0ccf9fd3f371c6f1e1c1cb1b899873043a3acf@group.calendar.google.com',
    'Movie Room': 'a5403e486ed41a8f5a6c948d570303b463b7e9387212836f1e359084e45cfdae@group.calendar.google.com',
    'PDR': '8d7c4798cf2d4f3fff978a6d207680d0a480a1a626dedc1dd36475c487f8672c@group.calendar.google.com'
}

const ReservationForm = () => {
    const [eventInfo, setEventInfo] = useState({
        eventName: '',
        eventDate: '',
        startTime: '',
        endTime: '',
        room: 'Commons',
        repeated: false,
        endDate: '',
      });

    const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      setEventInfo((prevInfo) => ({
        ...prevInfo,
        [name]: type === 'checkbox' ? checked : value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      sessionStorage.setItem('eventInfo', buildResponse(eventInfo))
      // Add your logic to handle form submission
      OAuthSignIn()
      console.log('Form submitted:', buildResponse(eventInfo));
    };
  
    return (
      <div className="form-box">
        <h2 className="form-header">R E S E R V E</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <label htmlFor="eventName">Name:</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={eventInfo.eventName}
            onChange={handleInputChange}
            required
          /><br />
          </div>

          <div className="form-group">
          <label htmlFor="eventDate">Date:</label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={eventInfo.eventDate}
            onChange={handleInputChange}
            required
          /><br />
          </div>
          
          <div className="time-group">
            <div className="time-input">
            <label htmlFor="startTime">Start:</label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              value={eventInfo.startTime}
              onChange={handleInputChange}
              required
            /><br />
            </div>

            <div className="time-input">
            <label htmlFor="endTime">End:</label>
              <input
                type="time"
                id="endTime"
                name="endTime"
                value={eventInfo.endTime}
                onChange={handleInputChange}
                required
              /><br />
            </div>
          </div>
          
          <div className="form-group"  style={{marginBottom: '5px'}}>
            <label style={{marginBottom: '0px'}}>Select Room:</label><br />
            <label htmlFor="commons" style={{paddingLeft: '15px', marginBottom: '2px'}}>
              <input
                type="radio"
                id="commons"
                name="room"
                value="Commons"
                checked={eventInfo.room === "Commons"}
                onChange={handleInputChange}
              />{" "}Commons</label><br />
            
            <label htmlFor="pdr" style={{paddingLeft: '15px', marginBottom: '2px'}}>
              <input
                type="radio"
                id="pdr"
                name="room"
                value="PDR"
                checked={eventInfo.room === "PDR"}
                onChange={handleInputChange}
              />{" "}PDR</label><br />
            
            <label htmlFor="jitchen" style={{paddingLeft: '15px', marginBottom: '2px'}}>
              <input
                type="radio"
                id="jitchen"
                name="room"
                value="Jitchen"
                checked={eventInfo.room === "Jitchen"}
                onChange={handleInputChange}
              />{" "}Jitchen</label><br />
            
            <label htmlFor="movieRoom" style={{paddingLeft: '15px', marginBottom: '0px'}}>
              <input
                type="radio"
                id="movieRoom"
                name="room"
                value="Movie Room"
                checked={eventInfo.room === "Movie Room"}
                onChange={handleInputChange}
              />{" "}Movie Room</label><br />
          </div>

          <div className="repeated-group">
            <label htmlFor="repeated">Repeated Weekly?</label>
            <input
              type="checkbox"
              id="repeated"
              name="repeated"
              checked={eventInfo.repeated}
              onChange={handleInputChange}
            /><br />
          </div>
  
          {eventInfo.repeated && (
            <div className="form-group">
              <label htmlFor="endDate">Until what date?</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={eventInfo.endDate}
                onChange={handleInputChange}
              /><br />
            </div>
          )}
  
          <br />
  
          <input className='submit-button' type="submit" value="Submit"/>
        </form>
      </div>
    );
  };

export default ReservationForm

const buildResponse = (eventInfo) => {
    const event = {
        summary: eventInfo.eventName,
        start: {
          dateTime: convertTime(eventInfo.eventDate, eventInfo.startTime), 
          timeZone: 'America/Chicago', 
        },
        end: {
          dateTime: convertTime(eventInfo.eventDate, eventInfo.endTime),
          timeZone: 'America/Chicago',
        },
        attendees: [
            {
                email: rooms[eventInfo.room],
                sendNotifications: false,
            }
        ],
      };
    
    if (eventInfo.repeated) {
        event.recurrence = [
            `RRULE:FREQ=WEEKLY;COUNT=${countWeeklyOccurrences(eventInfo.eventDate, eventInfo.endDate)}`,
          ]
    }
    return JSON.stringify(event)
}

const convertTime = (dateString, timeString) => {
    return dateString + "T"+ timeString + ":00"
}

function countWeeklyOccurrences(startDateStr, endDateStr) {
    const millisecondsInDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  
    // Convert start and end date strings to Date objects
    const startDate = new Date(startDateStr);
    startDate.toLocaleString('en-US', { timeZone: 'America/Chicago' })
    const endDate = new Date(endDateStr);
    endDate.toLocaleString('en-US', { timeZone: 'America/Chicago' })

    // Calculate the difference in days
    const dayDifference = Math.floor((endDate - startDate) / millisecondsInDay);
  
    // Calculate the number of weekly occurrences
    const weeklyOccurrences = Math.ceil(dayDifference / 7);
  
    return weeklyOccurrences
  }