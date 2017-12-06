var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'storkdb'
});

connection.connect(function (err) {
});
router.route('/')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        var newLocation = request.query.location;
        var bird = request.query.bird;

        connection.query("Update sightings Set sightings.CityName = '" + newLocation + 
            "' Where sightings.ScientificName = '" + bird + "'" ,
            function (err, rows, fields) {
                if (err) {
                    response.send({error: err});
                }
                else {
                    response.json({
                        feature6: [{id: 0, location: newLocation, bird: bird }]
                    });
                }
            })
    })
;


module.exports = router;

