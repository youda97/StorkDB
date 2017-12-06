var mysql      = require('mysql');
var express = require('express');
var app = express();

var feature1 = require('./routes/feature1');
var feature2 = require('./routes/feature2');
var feature3 = require('./routes/feature3');
var feature4 = require('./routes/feature4');
var feature5 = require('./routes/feature5');
var feature6 = require('./routes/feature6');
var birds = require('./routes/birds');
var locations = require('./routes/locations');
var users = require('./routes/users');

app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header('Access-Control-Allow-Methods', 'POST, PATCH, GET, PUT, DELETE, OPTIONS');
    next();
});

app.use('/feature1s', feature1);
app.use('/feature2s', feature2);
app.use('/feature3s', feature3);
app.use('/feature4s', feature4);
app.use('/feature5s', feature5);
app.use('/feature6s', feature6);
app.use('/birds', birds);
app.use('/locations', locations);
app.use('/users', users);


app.listen(3000, function () {
    console.log('Stork server listening on port 3000');
});
