var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var COLOR_COLLECTION = "colors";

var app = express();
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

process.env.MONGODB_URI = "mongodb://bhansa:bhansa293@ds245971.mlab.com:45971/color-palette";

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });


  // Generic error handler used by all endpoints.
  function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
  }

  app.get('/bhansa', function(req, res){
    console.log('hey bhansa');
  })

  app.use("/demo", (req, res) => {
    res.sendFile(__dirname + "/demo.html");
  });


  // COLORS API ROUTES BELOW 

  /*  "/api/colors"
  *    GET: finds all colors
  *    POST: creates a new color
  */

  app.get('/api/colors', function(req, res){
    db.collection(COLOR_COLLECTION).find({}).toArray(function(err, docs){
      if(err){
        handleError(res, err.message, "Falied to get colors");
      }
      else{
        res.status(200).json(docs);
      }
    })
  });

  app.post('/api/colors', function(res, req){
    console.log(req.body);
    if(!req.body.color_id || !req.body.color_value){
      handleError(res, "Invalid user input, Must provide both id and color value", 400);
    }
    else{
      let id = req.body.color_id;
      let value = req.body.color_value;
      let color = {'id': id, 'value': value};
      db.collection(COLOR_COLLECTION).insertOne(color, function(err, doc){
        if(err){
          handleError(res, err.message);
        }
        else{
          res.status(201).json(docs.ops[0]);
        }
      })
    }
  })


});
