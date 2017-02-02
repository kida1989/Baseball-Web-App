/**
 * Created by ereye on 8/28/2016.
 */
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/dev-baseball';

// Use connect method to connect to the server


router.get('/strikezone/Get', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        console.log("Connected successfully to mongodb");
        var col = db.collection('strikeZone');
        col.find({}).toArray(function (err,docs){
            
            res.json(docs);
             db.close();
        });
    });


});

module.exports = router;