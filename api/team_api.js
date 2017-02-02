/**
 * Created by ereye on 11/26/2016.
 */
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var db_url = 'mongodb://localhost:27017/dev-baseball';
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

 MongoClient.connect(db_url, function(err, db) {
     console.log("Connected successfully to mongodb");

     router.get("/team", function (req, res) {
         var col = db.collection("teams");
         col.find({}).toArray(function(err, doc) {
             if (err) {
                 handleError(res, err.message,"Failed to get teams");
             } else {

                 res.status(200).json(doc)

             }
         })

     });

     router.post("/team",function (req,res) {
         var newTeam = req.body;
         newTeam.createDate = new Date ();
         console.log(newTeam)


         if (!(req.body.MLB_id || req.body.Name)){
             handleError(res, "Invalid Team input","Must provide a MLB_id and Name.",400);
         }

         else {
             var col = db.collection("teams");
             col.insertOne(newTeam, function (err, doc) {
                 if(err) {
                     handleError(res,err.message,"Failed to create new Team")
                 }
                 else {
                     res.status(200).json(doc.ops[0])
                 }

             });
         }

     });

     router.get("/team/:id",function (req,res) {
        var col = db.collection("teams");
         console.log(req.params.id)
         col.find({_id: new ObjectID(req.params.id)}, function (err,doc) {
             if (err) {
                 handleError(res, err.message, 'Failed to get team');
             }
             else {
                 res.status(200).json(doc);
             }
         })
     });

      router.put("/team/:id",function (req,res) {
          
      });






      router.delete("/team/:id",function (req,res) {

            res.status(204).end();
        })
 })





                 // router.post("/teams",function(req,res){
                 //
                 //
                 //
                 // });
                 // router.get("/teams/:id",function(req,res){
                 //
                 //
                 //
                 // });
                 //
                 // router.put("/teams/:id",function(req,res){
                 //
                 //
                 //
                 // });
                 //
                 //   router.delete("/teams/:id",function(req,res){
                 //


                 // });







module.exports = router;