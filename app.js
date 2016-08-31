var express = require('express'),
app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.listen(8080, () => {
    console.log('Listening on port 8080.');
});

module.exports = exports = app;