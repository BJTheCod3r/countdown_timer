/*
Author: Bolaji Ajani
File: Countdown Timer
About: This countdown Timer displays days, hours, mins and seconds
*/
var countDown =  function(id, future) {
  var tnow     = Date.now(),
      tthen    = new Date(future).getTime(),
      secs_rem = tthen - tnow,
      day      = 86400000, // in milliseconds
      hour     = 3600000,
      min      = 60000,
      sec      = 1000,
      self     = this,
      selector = document.getElementById(id).children;
  this.days  = 0;
  this.hours = 0;
  this.mins  = 0;
  this.secs  = 0;

// check if milliseconds is enough to give days
if(secs_rem >= day) {
  this.days = Math.floor(secs_rem / day);
  secs_rem = secs_rem % day;
}

//check if milliseconds is enough to give hours
if(secs_rem >= hour) {
  this.hours = Math.floor(secs_rem / hour);
  secs_rem = secs_rem % hour;
}
else if(this.days > 0) {
  this.days -= 1;
  this.hours = 24;
}

//check if milliseconds is enough to give minutes
if(secs_rem >= min) {
  this.mins = Math.floor(secs_rem / min);
  secs_rem = secs_rem % min;
  //milliseconds could be lost
  //for more accuracy show the milliseconds
  this.secs = Math.floor(secs_rem / sec);
}
//initialize value
selector[0].innerHTML = this.days;
selector[1].innerHTML = this.hours;
selector[2].innerHTML = this.mins;
selector[3].innerHTML = this.secs;

this.runTimer = function() {
  setInterval(self.countSecs, 1000);
}

this.countSecs = function() {
  if(self.secs == 0 && self.mins != 0) {
    self.mins--;
    selector[2].innerHTML = self.mins;
    self.secs = 60;
    selector[3].innerHTML = self.secs;
  }
  if(self.mins == 0 && self.hours != 0) {
     self.hours --;
     selector[1].innerHTML = self.hours;
     self.mins = 60;
     selector[2].innerHTML = self.mins;
   }
     if(self.hours == 0 && self.days != 0) {
       self.days--;
       self.hours = 24;
       selector[1].innerHTML = self.hours;
     }
       if(self.days >= 0) {
         selector[0].innerHTML = self.days;
       }
  if(self.secs != 0) {
   self.secs--;
   selector[3].innerHTML = self.secs;
    }
 }
}
