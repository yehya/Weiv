var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
    extended: true
}))

// parse application/json 
app.use(bodyParser.json())

app.get("/", function(req, res) {
    res.sendfile('index.html');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});