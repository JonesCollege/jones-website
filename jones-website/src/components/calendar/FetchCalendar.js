import { config } from '../../config';
import jQuery from 'jquery';
import moment from 'moment';

export const FetchCalendar = (setEventsList) => {
    const queryMinTime = moment().subtract(6, 'months').format('YYYY-MM-DDTHH:mm:ss')

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
}