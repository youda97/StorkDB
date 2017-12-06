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
        connection.query("SELECT sightings.UserID AS id, sightings.ScientificName, useraccounts.CityName AS CityName, " +
            "species.PhysicalTraits, sightings.ScientificName AS ScientificName, sightings.NumberFound AS NumberFound FROM " +
            "((sightings LEFT JOIN useraccounts ON sightings.UserID = useraccounts.UserID) " +
            "LEFT JOIN regions ON useraccounts.CityName = regions.CityName) " +
            "JOIN species ON sightings.ScientificName = Species.ScientificName " +
            "WHERE sightings.ScientificName = '" + request.query.bird + "'  AND sightings.UserID = 61"  ,
            function (err, rows, fields) {
                if (!err) {
                    response.json({feature4: rows});
                }
            });
    })
        ;


        module.exports = router;

