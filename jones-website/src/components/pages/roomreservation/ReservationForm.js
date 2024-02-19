import React, {useState} from "react";
import { OAuthSignIn } from "./PostEvent";

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
      <div>
        <h2>Event Information Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={eventInfo.eventName}
            onChange={handleInputChange}
            required
          /><br />
  
          <label htmlFor="eventDate">Event Date:</label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={eventInfo.eventDate}
            onChange={handleInputChange}
            required
          /><br />
  
          <label htmlFor="startTime">Start Time:</label>
          <input
            type="time"
            id="startTime"
            name="startTime"
            value={eventInfo.startTime}
            onChange={handleInputChange}
            required
          /><br />
  
          <label htmlFor="endTime">End Time:</label>
          <input
            type="time"
            id="endTime"
            name="endTime"
            value={eventInfo.endTime}
            onChange={handleInputChange}
            required
          /><br />
  
          <label htmlFor="room">Room:</label>
          <select
            id="room"
            name="room"
            value={eventInfo.room}
            onChange={handleInputChange}
          >
            <option value="Commons">Commons</option>
            <option value="PDR">PDR</option>
            <option value="Jitchen">Jitchen</option>
            <option value="Movie Room">Movie Room</option>
          </select><br />
  
          <label htmlFor="repeated">Repeated Weekly:</label>
          <input
            type="checkbox"
            id="repeated"
            name="repeated"
            checked={eventInfo.repeated}
            onChange={handleInputChange}
          /><br />
  
          {eventInfo.repeated && (
            <div>
              <label htmlFor="endDate">End Date for Weekly Repeat:</label>
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
  
          <input type="submit" value="Submit"/>
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