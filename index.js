exports.init = async () => {
  const { google } = require('googleapis');
  const googleCalendar = google.calendar('v3');
  let { data } = await googleCalendar.calendarList.list({
    auth: 'auth'
  });

  return data;
}