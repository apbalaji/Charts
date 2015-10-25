var mongoose = require('mongoose');  
var Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/Analytics', function (error) {
    if (error) {
        console.log(error);
    }
});
var Product = mongoose.model('sales',new Schema({ name: String, price: Number}), 'sales'); 


var getDataFn = function(callback) {

 Product.aggregate([{$group:{
 	_id:{name:'$name'},
 	 avgprice: {$sum:'$price'}
 }}], function(err,results){
 	if (err)
 	{
 		console.error(err)
 	}
 	//console.log(JSON.stringify(results));
 	callback(results);
 });	
 //Product.find({}, function (err, docs) { 
       //callback(docs);
    //});
};

module.exports.getDataFn = getDataFn;






//module.exports = results;








