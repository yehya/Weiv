var express = require('express')
var bodyParser = require('body-parser')

var app = express()

////////////
/* CONFIG */
////////////

app.set('port', (process.env.PORT || 5000));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
    extended: true
}))

// parse application/json 
app.use(bodyParser.json());

//////////////
/* GET/POST */
//////////////

// Website
app.use('/', express.static('www'));

// Slides
app.use('/slides', express.static('slides'));

////////////
/* LISTEN */
////////////

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
    console.log("https://cmpsc421-yehyaawad.c9users.io/");
});