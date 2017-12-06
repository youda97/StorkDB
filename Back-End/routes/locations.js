var express = require('express');
var mysql   = require('mysql');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root123',
    database : 'storkdb'
});

connection.connect(function(err){
});
router.route('/')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        connection.query('SELECT CityName AS id , HabitatType from regions', function(err, rows, fields) {
            if(!err) {
                  response.json({location: rows});
            }
        });
    })

module.exports = router;
