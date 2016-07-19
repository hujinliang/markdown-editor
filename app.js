/**
 * Created by jialao on 2016/7/19.
 */

/**
 * Module dependencies.
 */

var express = require('express');
// var routes = require('./routes');
var favicon = require('serve-favicon');
var http = require('http');
var path = require('path');

var app = express();

// all environments




app.set('port', process.env.PORT || 1337);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(favicon(path.join(__dirname, 'public', 'favicon.jpg')))
app.use(express.static(path.join(__dirname,'')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'))
});



http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
