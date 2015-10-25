module.exports = function(app, path, dbFetch){


app.get('/', function(req,res){
res.sendFile(path.resolve(__dirname , '../../client', 'chart.html'));
});

app.get('/chartdata', function(req,res){
    var dataOut = {
       dataSin: []
     };
    
    dbFetch.getDataFn(function(results){
    if(results)
    {
    	  for (var i = 0; i <results.length; i++) {
           dataOut.dataSin.push({x: results[i]._id, avgprice: results[i].avgprice});
        }
    res.json(dataOut);
    }
    

    });
    
    
});

}
