// Various variables created to run ExpressJS and MongoDB
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('menu', ['menu']);
var db2 = mongojs('menu2',['menu2']);
var db3 = mongojs('menu3',['menu3']);
var db4 = mongojs('menu4',['menu4']);
var db5 = mongojs('customer',['customer']);
var db6 = mongojs('orderQueue',['orderQueue']);
var db7 = mongojs('reservationsQueue',['reservationsQueue']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

///////////////GET REQUESTS FOR DATABASES//////////////
app.get('/menu', function(req,res){
	console.log("I received a get request");

	db.menu.find(function(err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.get('/menu2', function(req,res){
	console.log("I received a get request2");

	db2.menu2.find(function(err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.get('/menu3', function(req,res){
	console.log("I received a get request3");

	db3.menu3.find(function(err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.get('/menu4', function(req,res){
	console.log("I received a get request4");

	db4.menu4.find(function(err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.get('/customer', function(req,res){
	console.log("I received a get request5");

	db5.customer.find(function(err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.get('/orderQueue', function(req,res){
	console.log("I received a get request6");

	db6.orderQueue.find(function(err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.get('/reservationsQueue', function(req,res){
	console.log("I received a get request7");

	db7.reservationsQueue.find(function(err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

///////////////ADD TO DATABASES//////////////////////////////////
app.post('/customer',function(req,res){
	db5.customer.insert(req.body, function(err,doc){
		res.json(doc);
	})
	console.log(req.body);
});

app.post('/orderQueue',function(req,res){
	db6.orderQueue.insert(req.body, function(err,doc){
		res.json(doc);
	})
	console.log(req.body);
});

app.post('/reservationsQueue',function(req,res){
	db7.reservationsQueue.insert(req.body, function(err,doc){
		res.json(doc);
	})
	console.log(req.body);
});


// create localhost on port 3000
app.listen(3000);
console.log("Hello from server port 3000");