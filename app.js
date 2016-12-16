var express = require('express'),
db = require('./db'),
sessions = require('client-sessions'),
schedule = require('node-schedule'),
io = require('socket.io')(8081),
bodyParser = require('body-Parser'),
app = express();

//Set view engine
app.set('view engine', 'ejs');

// Set static file dir
app.use(express.static('public'));

// Initialize middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Initialize sessions
app.use(sessions({
    cookieName: 'session',
    secret: 'sentientalarmsentientalarm',
    duration: 24 * 60 * 60 * 1000,
    activeDuration: 1000 * 60 * 5
}));

var controller = require('./endpoints/controller.js');
app.get('/', controller.getIndex); // TODO >> Need to pass user data eventually.
app.post('/', controller.setAlarm);

// Redirect necessary for checking/setting cron
app.get('/checkAlarm', function(req,res) {
    setAlarms()
    res.redirect('/')
})

app.get('/alarm', controller.getAlarm);
app.get('/alarmData', controller.getAlarmData);

// Need to change this when sessions and user logins are fully implemented.
app.get('/login', controller.getLogin);


// Socket connection settings
var alarmSounder = io
    .of('/alarm')
    .on('userAwake', function(socket) {
        alarmSounder.emit('alarmOff', {
            alarm :'off'
        });
    });

app.listen(8080, () => {
    console.log('Listening on port 8080.');
});

function setAlarms() {
    console.log("setALarms got called!!")
    db.all('SELECT * FROM alarms WHERE USERID=? AND dayID =?', 1, new Date().getDay(),
    function(err, alarmData) {
        if(err) {
            console.error(err);
        }
        console.log(alarmData)
        if(alarmData[0].alarmON == 1) {
            if(alarmData[0].ampm == 1) {
                alarmData[0].hours += 12
            }
            var setAlarmCron = schedule.scheduleJob(alarmData[0].minutes + ' ' + alarmData[0].hours + ' * * ' + alarmData[0].dayID, function() {
                console.log("schedule alarm cron ran.")
                
            })
        }
    })
}

// Cron job setup
//run every day of the week at 1am = '0 1 * * 0-7'
var daily = schedule.scheduleJob('0 1 * * 0-7', function() {
    setAlarms();
});

module.exports = exports = app;