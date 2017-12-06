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
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var SightingID = null;
        var datetime = request.body.feature5.Timestamp;
        var Timestamp = datetime.substring(0, 10) + " " + datetime.substring(10, 8);
        var NumberFound = request.body.feature5.NumberFound;
        var CityName = request.body.feature5.CityName;
        var UserID = request.body.feature5.UserID;
        var ScientificName = request.body.feature5.ScientificName;

        connection.query("INSERT into Sightings (SightingID, Timestamp, NumberFound, CityName, UserID, ScientificName) " +
            "Values ( null , '" + Timestamp + "', " + NumberFound + ", '" + CityName + "', " + UserID + ", '" + ScientificName + "')"
            ,
            function (err, rows, fields) {
                if (err) {
                    response.send({error: err});
                }
                else {
                    response.json({
                        feature5: {
                            id: 0,
                            Timestamp: Timestamp,
                            NumberFound: NumberFound,
                            CityName: CityName,
                            UserID: UserID,
                            ScientificName: ScientificName
                        }
                    });
                }
            })
    })
;


module.exports = router;

