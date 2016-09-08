var express = require('express'),
app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

var controller = require('./endpoints/controller.js');
app.get('/', controller.getIndex);


app.listen(8080, () => {
    console.log('Listening on port 8080.');
});

module.exports = exports = app;