//variables for time display in current day, time block that changes colors, and save button to save events to local storage
var currentDay = $('#currentDay');
var day = dayjs();
var timeSection = $('.time-block');
var saveButton = $('.saveBtn');

//display clock after page is loaded with html
window.onload = displayTime();

function displayTime() {

//Grabs current local time of device the page is loaded on
currentTime = new Date().toLocaleTimeString();

//Appends text of the current day, day of the month, month, year, and live current time
currentDay.text(day.format("dddd, MMM D, YYYY") + " " + currentTime)

//Counts time up by one second
setTimeout(displayTime, 1000);
}

//function to change color of sections
function eventPlanner() {

//Grabs the current hour of the day
var hour = day.hour();

timeSection.each(function() {

//Grabs string off id of current section and turns it into a number element
  var currentSection = parseInt($(this).attr("id"));

//Changes color of section depending on time
  if (currentSection < hour) {
    $(this).addClass('past')
  } else if (currentSection === hour) {
    $(this).addClass('present')
  } else {
    $(this).addClass('future')
  }
})
}








eventPlanner()