const express=require("express");
var app =express();

app.get("/",function(req,res){
  res.send("<h1>Bla Bla Bla <h1>");
});

app.get("/about",function(req,res){
  res.send("<h1>Muqad<h1>");
});
app.get("/category",function(req,res){
  res.send("<h1>I am Cute and my name is Shahid<h1>");
});

app.get("/calculator",function(req,res){
  res.sendFile(__dirname+"/calculator.html");
});

app.listen(3000);
