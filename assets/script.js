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
  saveBtn[i].addEventListener("click", submitInfo);
}

// submit to local storage
function submitInfo(event) {
  event.preventDefault();
  const str = `txt${event.target.id.slice(3)}`; // template literal
  const elementText = document.getElementById(str).value;
  saveToLocal(str, elementText);
}

function saveToLocal (key, value){
  //Stringify object into saveable items
  var saveableValue = JSON.stringify(value);
  //Save key highscores with value from saveableValue
  localStorage.setItem(key, saveableValue);
}

function getInfo(){
  //Get item from local storage
  for (var i = 0; i < 9; i++) {
    var id = `txt${i}`;
    var localStorageItem = localStorage.getItem(id);
    var data = JSON.parse(localStorageItem);
    console.log(data);
    if (data !== null) {
      document.getElementById(id).value = data;
    }
  }
}
getInfo();