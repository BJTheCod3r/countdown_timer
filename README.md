# Countdown Timer
A simple JavaScript countdown timer for websites

# Description
This is a simple JavaScript countdown timer that displays the days, hours, minutes and seconds. Although not overly generic but takes away the overkill on most countdown I've come by.

# Requirements
It will work on any browser that supports JavaScript

# Installation
Download the JS file and link to it on your page like you would normally do a JavaScript file.

# Usage
- In your HTML file create an element with a particular id, inside the id put four elements that will hold the day, hour, minute, and second. E.g.
``` html
  <div id='timer'><h1></h1><h1></h1><h1></h1><h1></h1></div>
```
- Instantiate class 'countDown' with the id of the timer container and the future date to count down to. E.g
``` javascript
  var Timer = new countDown('timer', 'May 14, 2019 23:32:48')
  ```
- Call function *runTimer()* like so 
``` javascript
Timer.runTimer() 
```
and you're good to go.
