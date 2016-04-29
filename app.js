/*global localStorage */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var LocalStorage = require('node-localstorage').LocalStorage;

////////////
/* CONFIG */
////////////

app.set('port', (process.env.PORT || 5000));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
    extended: true
}));

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

var lStorage;

if (typeof lStorage === "undefined" || lStorage === null) {
    lStorage = new LocalStorage('./scratch');
}

app.post('/saveNotes', function(req, res){
    var lecture = req.body; 
    lStorage.setItem("lecture", JSON.stringify(lecture));
    
    var stringLec = JSON.parse(lStorage.getItem("lecture"));
    console.log(stringLec);
    res.send();
});

app.get("/loadNotes", function(req, res){
    var lecture = lStorage.getItem("lecture");
    res.send(lecture);
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
    console.log("https://slide-viewer-yehyaawad.c9users.io/");
});