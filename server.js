var express=require('express');

var app=express();

app.get('/', function(req, res){
    res.send('Hello WOrld');
});

app.get('/about', function(req, res){
    res.send('About Us Page');
});

app.listen(3333);