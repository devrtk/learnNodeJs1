var express=require('express');

var app=express();
var PORT=process.env.PORT||3333;

app.get('/', function(req, res){
    res.send('Hello WOrld');
});

app.get('/about', function(req, res){
    res.send('About Us Page by RTK');
});

app.listen(PORT, function(){
    console.log('Running on port '+ PORT);
});

