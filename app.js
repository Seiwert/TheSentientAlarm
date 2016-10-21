var express = require('express'),
db = require('./db'),
sessions = require('client-sessions'),
app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

// Initialize sessions
app.use(sessions({
    cookieName: 'session',
    secret: 'sentientalarmsentientalarm',
    duration: 24 * 60 * 60 * 1000,
    activeDuration: 1000 * 60 * 5
}));

var controller = require('./endpoints/controller.js');
app.get('/', controller.getIndex);

// Need to change this when sessions and user logins are fully implemented.
app.get('/login', controller.getLogin);


app.listen(8080, () => {
    console.log('Listening on port 8080.');
});

module.exports = exports = app;