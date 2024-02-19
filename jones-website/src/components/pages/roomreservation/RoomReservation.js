import React, { useState, useRef, useEffect } from 'react';
import moment from 'moment';
import './RoomReservation.css'; 
import { BsChevronRight, BsChevronLeft, BsCalendar2Fill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import {PostEvent} from './PostEvent';
import RoomEventView from './RoomEventView';
import ReservationForm from './ReservationForm';
import { FetchRooms } from './FetchRooms';


function RoomReservation() {
  const [selectedDay, setSelectedDay] = useState(new Date())
  const [commonsEvents, setCommonsEvents] = useState([])
  const [pdrEvents, setPdrEvents] = useState([])
  const [kitchenEvents, setKitchenEvents] = useState([])
  const [movieRoomEvents, setMovieRoomEvents] = useState([])
  const datePicker = useRef()

  useEffect(() => {
    FetchRooms('Commons', setCommonsEvents)
    FetchRooms('PDR', setPdrEvents)
    FetchRooms('Jitchen', setKitchenEvents)
    FetchRooms('Movie Room', setMovieRoomEvents)

    let url = new URL(window.location.href);
    const accessTokenFromFragment = url.hash.includes('access_token') ? url.hash.split('access_token=')[1] : '';
    const accessToken = accessTokenFromFragment.includes('&token_type=') ? accessTokenFromFragment.split('&token_type=')[0] : '';
    const eventInfo = sessionStorage.getItem('eventInfo');
    if (accessToken != "" && eventInfo) {
      PostEvent(accessToken, eventInfo).then(() => {
        setTimeout(() => {
          FetchRooms('Commons', setCommonsEvents)
          FetchRooms('PDR', setPdrEvents)
          FetchRooms('Jitchen', setKitchenEvents)
          FetchRooms('Movie Room', setMovieRoomEvents)
        }, 1000);
      })
      sessionStorage.clear()
    }
  }, [])
  
  return (
    <div className='day-header'>
      <h1>Reserve a Room</h1>
    <div>
      <div className='day-header'>
        <div className='calendar-mobile-header'>    
           <button 
            className='month-button' 
            onClick={()=>setSelectedDay(moment(selectedDay).subtract(1, 'day'))}
            >
              <BsChevronLeft size={25}/>
            </button>
            <h2 className='day-title'>{moment(selectedDay).format('dddd M/DD')}</h2>
            <button 
                className='month-button' 
                style={{justifyContent:'right'}}
                onClick={()=>setSelectedDay(moment(selectedDay).add(1, 'day'))}
            >
              <BsChevronRight size={25}/>
            </button>
            <div className='day-selector-icon'>
                <DatePicker 
                ref={datePicker}
                selected={new Date(selectedDay)} 
                onChange={(date) => setSelectedDay(moment(date))} 
                //onCalendarOpen={()=>setPickerIsOpen(true)}
                customInput={
                    <BsCalendar2Fill />
                    }
                />
            </div>
        </div>


      </div>
    <div className='room-container'>
          <RoomEventView title="Commons" eventsList={commonsEvents} selectedDay={selectedDay}/>
          <RoomEventView title="PDR" eventsList={pdrEvents} selectedDay={selectedDay}/>
          <RoomEventView title="Jitchen" eventsList={kitchenEvents} selectedDay={selectedDay}/>
          <RoomEventView title="Movie Room" eventsList={movieRoomEvents} selectedDay={selectedDay}/>
    </div>
    </div>
    <ReservationForm />
    </div>
  );
}

export default RoomReservation;

