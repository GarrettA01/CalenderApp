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
function timePlanner() {

//Grabs the current hour of the day
var hour = day.hour();

timeSection.each(function() {

//Grabs string off id of current section and turns it into a number element
  var currentSection = parseInt($(this).attr("id"));

//Changes color of section depending on time
  if (currentSection < hour) {
    $(this).addClass('past');
  } else if (currentSection === hour) {
    $(this).addClass('present');
  } else {
    $(this).addClass('future');
  }
})
}

saveButton.on('click', function(){

  //grabs id of the section as a whole so only text typed 
  // in said section is set and grabbed from local storage
  var thisHour = parseInt($(this).parent().attr("id"));

  //grabs text area of section
  var textArea = $(this).prev().val();

  localStorage.setItem(thisHour, textArea);
})


// grabs local storage for each section upon page reload
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));

// function eventPlanner() {

//   $('.row').each(function() {

//     var userInput = $(this).children('.hour').text();

//     var textOutput = localStorage.getItem(userInput)

//     if (textOutput !== null) {
//       $(this).children('.description').val(textOutput);
//     }




//   })
// }





//calls function for color changing
timePlanner()
// eventPlanner()