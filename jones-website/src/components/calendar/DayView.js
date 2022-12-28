import React, { useCallback } from 'react'
import moment from 'moment'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import './Calendar.css'



const DayView = ({ selectedDay, eventsList }) => {
  const localizer = momentLocalizer(moment)
  const minDate = moment(selectedDay).format('MMMM DD, YYYY')+ ' 08:00:00 AM'

  
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
    <div>
        <h2 className='day-title'>{moment(selectedDay).format('dddd M/DD')}</h2>
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
            min={new Date(minDate)}
            dayLayoutAlgorithm={'no-overlap'}
            formats={{timeGutterFormat: (date, culture, localizer) =>
              localizer.format(date, 'ha', culture),
          }}
            eventPropGetter={eventStyleGetter}
            dayPropGetter={dayStyleGetter}
            />
    </div>
  )
}

export default DayView