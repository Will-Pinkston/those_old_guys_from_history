var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var dbUrl = 'mongodb://localhost:27017/history';
var collection
MongoClient.connect(dbUrl, function(err,db) {
	if (err) {
		console.log('Unable to connect to mongoDB server Error:', err);
	} else {
		console.log('Connection established to', dbUrl);
		collection = db.collection('history');
	}
});


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});


router.get('/history', function(req, res) {
  console.log("In history");
  var searchName = req.query.q;
  collection.find({name:searchName}).toArray(function(err, result) {
    if(err) {
      console.log(err);
    } else if (result.length) {
      console.log("Query Worked");
//      console.log(result);
      res.send(result);
    } else {
      console.log("No Documents found");
          }
  });
});

module.exports = router;
