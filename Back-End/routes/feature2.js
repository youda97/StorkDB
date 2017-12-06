var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'storkdb'
});

connection.connect(function (err) {
});

router.route('/')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        connection.query('SELECT SightingID AS id, CityName, COUNT(sightings.CityName) AS results ' +
            'FROM sightings GROUP BY CityName ORDER by results desc',
            function (err, rows, fields) {
            if (!err) {
                response.json({feature2: rows});
            }
        });
    })
;


module.exports = router;

