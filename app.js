var express = require('express');
var app = express();



app.use(express.static('cilent'));

app.get( '/',function(req,res){
    res.sendFile( __dirname + '/cilent/index.html');
});

app.get( '/aboutus',function(req,res){
    res.sendFile( __dirname + '/cilent/aboutus.html');
});

app.get( '/procenter',function(req,res){
    res.sendFile( __dirname + '/cilent/procenter.html');
});

app.get( '/state',function(req,res){
    res.sendFile( __dirname + '/cilent/state.html');
});

app.get( '/procenter/wgbc',function(req,res){
    res.sendFile( __dirname + '/cilent/propart1.html');
});

app.get( '/procenter/xbzl',function(req,res){
    res.sendFile( __dirname + '/cilent/propart2.html');
});

app.get( '/procenter/wlyb',function(req,res){
    res.sendFile( __dirname + '/cilent/propart3.html');
});

app.get( '/procenter/jczd',function(req,res){
    res.sendFile( __dirname + '/cilent/propart4.html');
});


app.listen(80);
console.log('connecting~~~')