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

// To change background colors based on hour
const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));


Array.from(rows).forEach(row => {
  var rowIdString = parseInt(row.id);
  if (currentHour === rowIdString) {
    setColor(row, "red");
  } else if (currentHour < rowIdString) {
    setColor(row, "green");
  } else { 
    setColor(row, "grey");
  }
}); 

function setColor(element, color) {
  element.style.backgroundColor = color;
}

// add event listener to save buttons
var saveBtn = document.querySelectorAll('.saveBtn');
for (var i = 0; i < saveBtn.length; i++) {
  saveBtn[i].addEventListener("click", saveInfo);
}

// save to local storage
function saveInfo() {
  var textInput = this.parentElement.value;
  var key = this.parentElement.getAttribute('id');
  localStorage.getItem(key, textInput);
  console.log(saveInfo);
}

for (var i =9; i < 18; i++) {
  var textVal = localStorage.getItem(i);
  document.getElementById(i).value = textVal;
}