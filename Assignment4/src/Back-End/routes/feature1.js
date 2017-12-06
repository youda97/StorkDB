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

        var lmt = parseInt(request.query.limit) ;
        var offset = parseInt(request.query.offset);

        connection.query("Select ImageRelationID AS id, speciesimages.ScientificName AS ScientificName, images.ImageUrl AS imageURL from " +
            "((speciesimages LEFT JOIN species ON speciesimages.ScientificName = speciesimages.ScientificName) " +
            "JOIN images ON speciesimages.ImageID = images.ImageID) " +
            " LIMIT " + offset + ", " + lmt 
            ,
            function (err, rows, fields) {
            if (!err) {
                response.json({feature1: rows});
            }
        });
    })
;


module.exports = router;

