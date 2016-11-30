var express = require('express'),
db = require('./db'),
sessions = require('client-sessions'),
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


// Need to change this when sessions and user logins are fully implemented.
app.get('/login', controller.getLogin);


app.listen(8080, () => {
    console.log('Listening on port 8080.');
});

module.exports = exports = app;