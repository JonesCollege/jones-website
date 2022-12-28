import jQuery from 'jquery';

export const CalFetch = () => {
    jQuery.ajax({
        url:"https://www.googleapis.com/calendar/v3/calendars/jonessecretaries@gmail.com/events?singleEvents=true&orderBy=startTime&sortOrder=ascending&timeMin=2022-12-23T19:02:55.808Z&key=AIzaSyCA4ZVrIL1opJv1Nx3Da3coFRcexl_4oo8",
        type: "GET",
        dataType: "json",
        async:false,
        // async lets the data stay saved after the inital call, otherwise the data will be removed after the success call
        success: function(data) {
          console.log(data);
          eventlist = data.items;
          console.log(eventlist);
        }
          });
}