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


function eventPlanner() {

var hour = day.hour();

timeSection.each (function checkTime(){
  var currentHour = parseInt($(timeSection).attr("id"));


})



}