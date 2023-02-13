import React from 'react'
import { useEffect, useState } from 'react'
import DayView from './DayView'
import { FetchCalendar } from './FetchCalendar'
import moment from 'moment'
import { BsChevronRight, BsChevronLeft, BsCalendar2Fill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRef } from 'react'

function CalendarMobile() {
    const [eventsList, setEventsList] = useState([])
    const [selectedDay, setSelectedDay] = useState(new Date())
    const [pickerIsOpen, setPickerIsOpen] = useState(false)
    const datePicker = useRef()
    
    useEffect(()=>{
        FetchCalendar(setEventsList)
    }, [1])

    const handleDatePicker = () => {
        if (pickerIsOpen){
            setPickerIsOpen(false)
            datePicker.current?.setOpen(false)
        }
    };
  return (
    <div className='calendar-mobile-container'>     
        <div className='calendar-mobile-header'>    
           <button 
            className='month-button' 
            onClick={()=>setSelectedDay(moment(selectedDay).subtract(1, 'day'))}
            >
                <BsChevronLeft size={25}/>
            </button>
            <div className='day-selector-icon'>
                <DatePicker 
                ref={datePicker}
                selected={new Date(selectedDay)} 
                onChange={(date) => setSelectedDay(moment(date))} 
                onCalendarOpen={()=>setPickerIsOpen(true)}
                customInput={
                    <BsCalendar2Fill />
                    }
                />
            </div>
            
            <button 
                className='month-button' 
                style={{justifyContent:'right'}}
                onClick={()=>setSelectedDay(moment(selectedDay).add(1, 'day'))}
            >
                <BsChevronRight size={25}/>
            </button>   
        </div>
        <DayView selectedDay={selectedDay} eventsList={eventsList}/>
    </div>
  )
}

export default CalendarMobile