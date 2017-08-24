/*
Author: Bolaji Ajani
File: Countdown Timer
About: This countdown Timer displays days, hours, mins and seconds
*/
var date = new Date(),
    tnow = date.getTime(),
    tthen = (1503032494 + (24 * 60 * 60 * 30)) * 1000,
    secs_rem = tthen - tnow,
    days = 0,
    hours = 0,
    mins = 0,
    secs = 0,
    day = 86400000;
// check if milliseconds is enough to give days
if(secs_rem >= 86400000) {
  days = Math.floor(secs_rem / day);
  secs_rem = secs_rem % day;
}

//check if milliseconds is enough to give hours
if(secs_rem >= 3600000) {
  hours = Math.floor(secs_rem / 3600000);
  secs_rem = secs_rem % 3600000;
}
else if(days > 0) {
  days -= 1;
  hours = 24;
}

//check if milliseconds is enough to give minutes
if(secs_rem >= 60000) {
  mins = Math.floor(secs_rem / 60000);
  secs = secs_rem % 60000;
  //milliseconds could be lost
  //for more accuracy show the milliseconds
  secs = Math.floor(secs/1000);
}
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("mins").innerHTML = mins;
document.getElementById("secs").innerHTML = secs;

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
