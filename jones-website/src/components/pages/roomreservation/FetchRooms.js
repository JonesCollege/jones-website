import { config } from '../../../config'
import jQuery from 'jquery';
import moment from 'moment';

const rooms = {
  'Commons':'0dc519d2efedb636f29ca28335aee7f34b90095d46507b879e92af4dbcf07e68@group.calendar.google.com',
  'Jitchen': 'c1135169eaaa09a3678e23a7ae0ccf9fd3f371c6f1e1c1cb1b899873043a3acf@group.calendar.google.com',
  'Movie Room': 'a5403e486ed41a8f5a6c948d570303b463b7e9387212836f1e359084e45cfdae@group.calendar.google.com',
  'PDR': '8d7c4798cf2d4f3fff978a6d207680d0a480a1a626dedc1dd36475c487f8672c@group.calendar.google.com'
}


export const FetchRooms = (room, setRoomsList) => {
    const queryMinTime = moment().subtract(1, 'day').format('YYYY-MM-DDTHH:mm:ss')

    jQuery.ajax({
        url:"https://www.googleapis.com/calendar/v3/calendars/"+ rooms[room] +"/events?singleEvents=true&orderBy=startTime&sortOrder=ascending&timeMin="+queryMinTime+".808Z&maxResults=500&key="+ config.API_KEY,
        type: "GET",
        dataType: "json",
        async:true,
        // async lets the data stay saved after the inital call, otherwise the data will be removed after the success call
        success: function(data) {
            setRoomsList(data.items.map((event, key)=> {
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
}