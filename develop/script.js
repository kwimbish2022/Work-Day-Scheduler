var date = "";
var dateTime = "";
var hour = "";

//Function that gets the current date
var currentTime = function(){
    date = moment(new Date());
    dateTime.html(date.format('MMMM Do YYYY, h:mm:ss a'));
}

// Function that keeps accurate date/time in the header
$(document).ready(function(){
    dateTime = $("#currentDay");
    currentTime();
    setInterval(currentTime, 1000);
});

var currentHour = (new Date()).getHours();
$('row').each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour + 6){
      $(this).css('background-color', 'green');      
    }else if(val < currentHour && val > currentHour - 6){
      $(this).css('background-color', 'gray');
    }else if(val === currentHour){
      $(this).css('background-color', 'red');
    }
});
