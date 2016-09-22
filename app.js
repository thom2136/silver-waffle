/**
var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
*/

var PORT = Number(process.env.PORT || 1337);

//express - implementation
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();


// configure app

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// use middleware

app.use(bodyParser());


// define routes

app.get('/', function (req, res){
	res.render('index', {
		title: 'My App'
	});
});

app.post('/add', function (req, res){
	var newItem = req.body.newItem;
	console.log(newItem);
	res.redirect('/');
});


app.listen(PORT, function() {
	console.log('ready on port ' + PORT);
});