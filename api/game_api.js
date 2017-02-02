/**
 * Created by ereye on 11/26/2016.
 */
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/dev-baseball';

router.get("/api/game",function (req,res) {

})