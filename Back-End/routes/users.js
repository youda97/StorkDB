var express = require('express');
var mysql   = require('mysql');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'storkdb'
});

connection.connect(function(err){
});
router.route('/')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        connection.query('SELECT UserID AS id, UserName  from useraccounts', function(err, rows, fields) {
            if(!err) {
                  response.json({user: rows});
            }
        });
    })

module.exports = router;
