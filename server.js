var express = require('express');
var app = express.createServer();

app.get('/', function(req, res){
    res.send('try /get /post /put /delete');
});

app.get('/get', function(req, res){
    res.send('Hello World');
});

app.post('/post', function(req, res){
    res.send('Hello World');
});

app.put('/put', function(req, res){
    res.send('Hello World');
});

app.delete('/delete', function(req, res){
    res.send('Hello World');
});

app.listen(3333);
