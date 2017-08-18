/*
Author: Bolaji Ajani
File: Countdown Timer
About: This countdown Timer displays days, hours, mins and seconds
*/

var date = new Date();
var tnow = date.getTime();
var tthen = (1503032494 + (24 * 60 * 60 * 30)) * 1000;
var secs_rem = tthen - tnow;
var days = 0;
var hours = 0;
var mins = 0;
var secs = 0;
var day = 86400000;
// check if milliseconds is enough to give days
if(secs_rem >= 86400000) {
var days = Math.floor(secs_rem / day);
//udays = days;
document.getElementById("days").innerHTML = days;
var secs_rem = secs_rem % day;
}

//check if milliseconds is enough to give hours
if(secs_rem >= 3600000) {
  hours = Math.floor(secs_rem / 3600000);
  if(hours == 0 && days != 0) {
    days -= 1;
    hours = 24;
    document.getElementById("days").innerHTML = days;
  }
  document.getElementById("hours").innerHTML = hours;
  secs_rem = secs_rem % 3600000;
}

//check if milliseconds is enough to give minutes
if(secs_rem >= 60000) {
  mins = Math.floor(secs_rem / 60000);
  if(mins == 0 && hours != 0) {
    hours -= 1;
    mins = 60;
    document.getElementById("hours").innerHTML = hours;
  }
  document.getElementById("mins").innerHTML = mins;
  secs = secs_rem % 60000;
  //milliseconds could be lost
  //for more accuracy show the milliseconds
  secs = Math.floor(secs/1000);
  document.getElementById("secs").innerHTML = secs;
}

setInterval(countSecs, 1000);
function countSecs() {
  if(secs == 0 && mins != 0) {
    mins -= 1;
    document.getElementById("mins").innerHTML = mins;
    secs = 60;
    document.getElementById("secs").innerHTML = secs;
  if(mins == 0 && hours != 0) {
     hours -= 1;
     document.getElementById("hours").innerHTML = hours;
     mins = 60;
     document.getElementById("mins").innerHTML = mins;
     if(hours == 0 && days != 0) {
       days -= 1;
       hours = 24;
       document.getElementById("hours").innerHTML = hours;
       if(days != 0) {
         document.getElementById("days").innerHTML = days;
       }
     }
   }
  }
   secs -= 1;
   document.getElementById("secs").innerHTML = secs;
  }
