# TheSentientAlarm
![Alt text](/Senior Project Poster.png?raw=true "Poster")

## How it works
![Alt text](/Sentient Alarm 1.png?raw=true "Example")
This node applet utilizes Tracking.js to do color tracking on a user to figure out there relative position. It automatically
determines if a user has crossed the boundary zone and will turn the alarm back on if so. 

## UI usage
![Alt text](/Sentient Alarm 2.png?raw=true "User Interface")
Currently, the login page isn't tied to anything but the database is set up to use it once it's implemented. As for alarm setting, simply click
the day of the week you wanna set an alarm and choose a time and then hit set alarm. You can also set multiple days at once and then click set alarm. 
Once you have set an alarm, navigate to localhost:8080/alarm on your monitoring device.

## Installation
To install, simply clone or download this repo. After that, install Node and use npm to install
all necessary dependencies (listed in package.json).

## Configuration
Currently, there is no config file or UI to change settings so they must be done manually. To change bed location, modify this line:
```javascript
    if(rect.x > 200 && rect.x < 500 && rect.y > 190 && rect.y < 410)
 ```
 inside of "views/alarm.ejs".

To change skin tone that is tracked, modify these lines: 
```javascript
tracking.ColorTracker.registerColor('skin', function(r,g,b) {
    var threshold = 10,
     dr = r - 204,
     dg = g - 148,
     db = b - 148;
```
also inside of "views/alarm.ejs"

