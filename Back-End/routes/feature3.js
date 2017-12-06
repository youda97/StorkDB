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
        connection.query('SELECT useraccounts.UserName AS id, COUNT(sightings.UserID) AS results ' +
            'FROM sightings Inner Join  useraccounts ON sightings.UserID = useraccounts.userID' +
            ' GROUP BY UserName ORDER by results desc LIMIT 10',
            function (err, rows, fields) {
                if (!err) {
                    response.json({feature3: rows});
                }
            });
    })
;


module.exports = router;

