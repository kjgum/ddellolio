// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
// app.use(express.static(process.cwd() + '/public'));
app.use(express.static('public'));

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/about', function(req, res){
  res.sendFile(path.join(__dirname, 'about.html'));
})

app.get('/contact', function(req, res){
  res.sendFile(path.join(__dirname, 'contact.html'));
})

app.get('/margaritas_on_my_mind', function(req, res){
  res.sendFile(path.join(__dirname, 'post1.html'));
})
app.get('/american_punch', function(req, res){
  res.sendFile(path.join(__dirname, 'post2.html'));
})

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
  console.log('App listening on PORT ' + PORT);
})