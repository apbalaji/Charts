var express = require('express');
var app = express();
var path = require('path');
var dbFetch =require('./apis/dbFetch.js');
var data = require('./apis/getData.js')(app,path,dbFetch);



app.use("/js",express.static(path.resolve(__dirname , '..', 'client/js')));
app.use("/bower_components",express.static(path.resolve(__dirname , '..', 'bower_components')));

var server = app.listen(3500, function(){
console.log('server running at port '+server.address().port);
});



