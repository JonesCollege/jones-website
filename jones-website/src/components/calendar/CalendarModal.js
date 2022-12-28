import React, { useMemo } from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import moment from 'moment'
import './CalendarModal.css'
import './Calendar.css'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect } from 'react';
import jQuery from 'jquery';
import { useState } from 'react';
import DayView from './DayView';
import { config } from '../../../../config';

const localizer = momentLocalizer(moment)

function CalendarModal() {
  const [eventsList, setEventsList] = useState([])
  const [selectedDay, setSelectedDay] = useState(new Date())
  const [displayDate, setDisplayDate] = useState(new Date())

  const queryMinTime = moment().subtract(6, 'months').format('YYYY-MM-DDTHH:mm:ss')

  useEffect(() => {
    jQuery.ajax({
      url:"https://www.googleapis.com/calendar/v3/calendars/"+ config.CAL_ID +"/events?singleEvents=true&orderBy=startTime&sortOrder=ascending&timeMin="+queryMinTime+".808Z&maxResults=500&key="+ config.API_KEY,
      type: "GET",
      dataType: "json",
      async:false,
      // async lets the data stay saved after the inital call, otherwise the data will be removed after the success call
      success: function(data) {
        setEventsList(data.items.map((event, key)=> {
          let start = ''
          let end = ''
          if (event.start.date){
            start = new Date(moment(event.start.date).toISOString())
            end = new Date(moment(event.end.date).toISOString())
          }
          else {
            start = new Date(moment(event.start.dateTime).toISOString())
            end = new Date(moment(event.end.dateTime).toISOString())
          }
          return(
          {
            id: key,
            start: start, 
            end: end,
            title: event.summary,
          } 
        )}))
      }
        });
  }, []) 

  const eventStyleGetter = (event) => {
    const style = {
        // background:  0% 0% no-repeat padding-box;
        backgroundColor: '#D0ACE1',
        borderLeft: `none`,
        borderTop:'none',
        borderRight:'none',
        borderBottom:'none',
        borderRadius: "0px 7px 7px 0px",
        color: "white",
        display: "block",
    };

    return {
        style: style,
    };
  };

  const selectedDayStyleGetter = (date) => {
    let style;
    if (moment(date).isSame(selectedDay)){
      style = {
        backgroundColor: '#fcf5ff',
        color: 'white',
    };
    }
    else{
      style = {
        // background:  0% 0% no-repeat padding-box;
        backgroundColor: 'transparent',
    };
    }
    return {
        style: style,
    };
  };
  console.log(selectedDay)

    return (
    <div className='calendar-modal-container'>
      <div style={{padding:'2rem'}}>
        <div className='header'>
          <button 
            className='month-button' 
            onClick={()=>setDisplayDate(moment(displayDate).subtract(1, 'months'))}
            >
            <BsChevronLeft size={25}/>
          </button>
          <div style={{flex:25}}>
            <h2 className='month-title'>{moment(displayDate).format("MMMM YYYY")}</h2>
          </div>
          <button 
            className='month-button' 
            onClick={()=>setDisplayDate(moment(displayDate).add(1, 'months'))}
          >
            <BsChevronRight size={25}/>
          </button>
          
        </div>
        <div className='calendar-container'>
          <div>
            <Calendar
            date={displayDate}
            localizer={localizer}
            events={eventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ 
              height: 400, 
              width: 650,
              cursor: 'pointer',
            }}
            defaultView={Views.MONTH}
            views={{ month: true, week: false, day: false }}
            onSelectEvent={(eventInfo)=>{
              setSelectedDay(eventInfo.start)
              console.log(eventInfo)
            }}
            onSelectSlot={(slotInfo)=> {setSelectedDay(slotInfo.start)}}
            onDrillDown={(date)=>setSelectedDay(date)}
            selectable
            toolbar={false}
            dayLayoutAlgorithm={'no-overlap'}
            formats={{
              weekdayFormat: (date, culture, localizer) =>
                localizer.format(date, 'dd', culture).substring(0,1)
            }}
            eventPropGetter={eventStyleGetter}
            dayPropGetter={selectedDayStyleGetter}
            />
          </div>
        </div>
      </div>
      <div className='day-view-border'>
        <DayView selectedDay={selectedDay} eventsList={eventsList}/>
      </div>
    </div>
  )
}

export default CalendarModal
