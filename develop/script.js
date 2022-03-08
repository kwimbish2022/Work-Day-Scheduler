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

