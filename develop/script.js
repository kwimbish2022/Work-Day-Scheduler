// let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

// Function that gets the most current date
var currentTime = function(){
    date = moment(new Date());
    dateTime.html(date.format('MMMM Do YYYY, h:mm:ss a'));
}
// Function that  maintains accurate date and time in the heasder
$(document).ready(function(){
    dateTime = $("#currentDay");
    currentTime();
    setInterval(currentTime, 1000);
});

currentTime();

// create load function to display
// function date() {
//   var today = moment().format('dddd, MMMM, YYYY');
//   todaysDate.innerHTML = today;
//   console.log(date);
// }
// date();

