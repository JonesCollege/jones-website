import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import './CalendarModal.css'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)
const myEventsList = [
  { start: new Date(), end: new Date(), title: "special event" }
];

function CalendarModal() {
  return (
    <div className='calendar-modal-container'>
        <h2>Calendar</h2>
        <div>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          />
        </div>
  </div>
  )
}

export default CalendarModal