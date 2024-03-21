import { config } from '../../../config' 

export function OAuthSignIn() {
  const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
    const clientId = config.CLIENT_ID;
    const redirectUri = 'https://jones.rice.edu/reserve-room';
    //const redirectUri = 'http://localhost:3000/reserve-room';

    const params = {
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: 'token',
      scope: 'https://www.googleapis.com/auth/calendar.events',
      include_granted_scopes: 'true',
      state: 'pass-through value',
    };

    // Construct the URL with parameters
    const url = `${oauth2Endpoint}?${new URLSearchParams(params).toString()}`;

    // Redirect to the OAuth 2.0 endpoint
    window.location.href = url;
}

// export const PostEvent = async (accessToken, eventInfo) => {
//     const apiUrl = `https://www.googleapis.com/calendar/v3/calendars/primary/events`;
//     jQuery.ajax({
//         url: apiUrl,
//         type: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${accessToken}`,
//         },
//         data: eventInfo,
//         success: function(data) {
//             console.log("EVENT ADDED")
//             //ADD SUCCESS MESSAGE TO THE USER
//             console.log(data)
//         }
//     });
// }

export const PostEvent = async (accessToken, eventInfo) => {
    const apiUrl = `https://www.googleapis.com/calendar/v3/calendars/primary/events`;
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: eventInfo,
      });
  
      if (!response.ok) {
        throw new Error(`Failed to add event. Status: ${response}`);
      }
  
      const data = await response.json();
      console.log("EVENT ADDED");
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error adding event:", error);
      throw error;
    }
  };
  

    // console.log(j)
    // jQuery.ajax({
    //     url:"https://people.googleapis.com/v1/people/me?personFields=emailAddresses",
    //     headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //     },
    //     type: "GET",
    //     // async lets the data stay saved after the inital call, otherwise the data will be removed after the success call
    //     success: function(data) {
    //         console.log(data)
    //         const email = data.emailAddresses[0]
           
    // });
    // const apiUrl = `https://www.googleapis.com/calendar/v3/calendars/${config.CAL_ID}/events?key=${config.API_KEY}`;
    // jQuery.ajax({
    //     url: apiUrl,
    //     type: "GET",
    //     headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //     },
    //     dataType: "json",
    //     async:false,
    //     // async lets the data stay saved after the inital call, otherwise the data will be removed after the success call
    //     success: function(data) {
    //         console.log(data)
    //     }
    // });

  