const { json } = require("body-parser");
var express= require("express");
var app=express();
var https =require("https")
var bodyparser=require("body-parser")


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  var myobj = { name: "Company Inc", address: "Park Lane 38" };
dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted"+res.insertedId);
    db.close();
  });

  
});

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
  
//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
//    dbo = db.db("mydb");
// });
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = [
//     { _id: 154, name: 'Chocolate Heaven'},
//     { _id: 155, name: 'Tasty Lemon'},
//     { _id: 156, name: 'Vanilla Dream'}
//   ];
//   dbo.collection("products").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log(res);
//     db.close();
//   });
// });


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { address: "Highway 37" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});





app.use(express.static("public"));

app.use(bodyparser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/page.html");
});

app.post("/index.html",function(req,res){
  
  var url="https://api.openweathermap.org/data/2.5/weather?appId=784d69bc70a52fcfa948226aae1e233a&q=London&units=metric"
  console.log(url);

  https.get(url,function(response){
    console.log(response);

    response.on("data",function(data){
      var respo=JSON.parse(data);
      console.log(respo.main.temp)


    })


    var fname=req.body.fname;
    var lname=req.body.lname;
    var email=req.body.email;

    console.log(fname)



  })


    res.send("Shahid Hameed <br> 0222222 <br> Fast National University");
  });
  

app.listen(3000);
