/**
 * Created by ereye on 9/4/2016.
 */
var gameday = require('gameday-helper');
var MongoClient = require('mongodb').MongoClient;
var toolbox = require ('./toolbox/toolbox.js');
var development_db = require ('./config/config').development.db;



exports.getGamesByDate = function (starDate,endDate) {

    var dates = toolbox.getDateRange(starDate,endDate,'YYYY-MM-DD');

    toolbox.iterateOver(dates, function (dates) {
        gameday.miniScoreboard(new Date(dates))
        .then( function(data){

            MongoClient.connect(development_db.toString(),function (err,db) {
                console.log('Connecting Successful');
                var col = db.collection('games');
                var games = toolbox.structureGame(data);


                col.insertMany(games);
                db.close();
                console.log('Connection Closed');
            });
        })

        .catch( function( error ) {
            console.log( error );
        });


    });
};


this.getGamesByDate('2016-01-01',"2016-09-18");














/**
 * Created by ereye on 11/23/2016.
 */
