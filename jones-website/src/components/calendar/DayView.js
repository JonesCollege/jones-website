import React from 'react'
import moment from 'moment'
import {IoLocationSharp} from 'react-icons/io5'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import './Calendar.css'



const DayView = ({ selectedDay, eventsList }) => {
  const eventsToday = findEventsToday(selectedDay, eventsList)
  const allDayEvents = findAllDay(eventsToday)
  const partialDayEvents = removeAllDay(eventsToday)
  const localizer = momentLocalizer(moment)
  
  //const minTime = moment(selectedDay).format('MMMM DD, YYYY')+ ' 08:00:00 AM'
  const minTime = findMinTime(partialDayEvents, selectedDay)
  const maxTime = findMaxTime(partialDayEvents, selectedDay)

  const eventStyleGetter = (event) => {
    let bgColor;
    let borderColor;
    let fontColor;
    if (event.id % 3 === 1){
      bgColor = '#fcf5ff'
      borderColor = '#D0ACE1'
      fontColor = "#D0ACE1"
    }
    else if (event.id % 3 === 2) {
      bgColor = '#E8FFEE'
      borderColor = '#9BDAB0'
      fontColor = "#9BDAB0"
    }
    else {
      bgColor = '#e1eefb'
      borderColor = '#70ace3'
      fontColor = "#70ace3"
    }
    let style = {
        // background:  0% 0% no-repeat padding-box;
        backgroundColor: `${bgColor}`,
        borderLeft: `3px solid ${borderColor}`,
        borderTop:'none',
        borderRight:'none',
        borderBottom:'none',
        borderRadius: "0px 10px 10px 0px",
        color: `${fontColor}`,
        display: "block",
    };

    return {
        style: style,
    };
  };
  
  const dayStyleGetter = (date) => {
    let style;
      style = {
        // background:  0% 0% no-repeat padding-box;
        backgroundColor: 'transparent',
    };
    return {
        style: style,
    };
  };

  return (
    <div className='day-view-container'>
        <h2 className='day-title'>{moment(selectedDay).format('dddd M/DD')}</h2>
        {
          allDayEvents.length > 0 &&
          <div className='all-day-container'>
          <p className='all-day-header'>ALL DAY:</p>
          {
          allDayEvents.map((event, key) => <AllDayTag key={key} title={event.title} location={event.location}/>)
          }
        </div>
        }
        
        {
          partialDayEvents.length > 0 ?
          <Calendar
            date={selectedDay}
            events={eventsList}
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            defaultView={Views.DAY}
            views={{ month: false, week: false, day: true }}
            toolbar={false}
            style={{ 
                height: 400, 
                width: 275,
              }}
            min={minTime && new Date(minTime)}
            max={maxTime && new Date(maxTime)}
            dayLayoutAlgorithm={'no-overlap'}
            formats={{timeGutterFormat: (date, culture, localizer) =>
              localizer.format(date, 'ha', culture),
          }}
            eventPropGetter={eventStyleGetter}
            dayPropGetter={dayStyleGetter}
            tooltipAccessor={(event) => <EventTooltip event={event} />}
            />
        :
        <div className='no-events'>
          No events.
        </div>
        }
        
    </div>
  )
}

export default DayView

const findEventsToday = (selectedDay, eventsList) =>{
  return eventsList.filter(event => moment(selectedDay).format('MM/DD/YYYY') === moment(event.start).format('MM/DD/YYYY'))
}

const removeAllDay = (eventsToday) => {
  return eventsToday.filter(event => moment(event.start).format('HH:mm:ss') !== '00:00:00')
}

const findAllDay = (eventsToday) => {
  return eventsToday.filter(event => moment(event.start).format('HH:mm:ss') === '00:00:00')
}

const findMinTime = (partialDayEvents, selectedDay) => {
  if (partialDayEvents.length !== 0) {
    const firstTime = partialDayEvents[0].start
    return moment(firstTime).subtract(3, 'hours')
  }
  else {
    return undefined
  }
}

const findMaxTime = (partialDayEvents, selectedDay) => {
  if (partialDayEvents.length !== 0) {
    const finalTime = partialDayEvents[partialDayEvents.length - 1].end
    if (moment(finalTime).diff(moment(selectedDay).endOf('day'), "hours") < -3)
      return moment(finalTime).add(3, 'hours')
  }
  else {
    return undefined
  }
}

const AllDayTag = ({title, location, key}) => {
  return (
    <div key={key} className='all-day-tag'>
      <p className='all-day-tag-title'>{title}</p>
      {location && 
        <div className='all-day-tag-loc'>
          <IoLocationSharp style={{marginRight:'3px'}}/>
          {location}
        </div>
      }
    </div>
  )
}

const EventTooltip = ({event}) => {
  console.log(event)
  return (
    <div style={{backgroundColor:'black'}}>
      {event.title}
    </div>
  )
}