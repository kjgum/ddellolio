// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var path = require('path');
var exphbs = require('express-handlebars');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(process.cwd() + '/public'));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'index'));
// })
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    res.render('index');
});
app.get('/about', function(req, res) {
    res.render('about');
})

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.get('/archive', function(req, res) {
    res.render('archive');
})

// blog posts
app.get('/2016/5/26/edible_six_pack_rings', function(req, res) {
    res.render('052616_edible_6pack_rings');
})

app.get('/2016/6/2/best_summer_brews', function(req, res) {
    res.render('060216_best_summer_brews');
})

app.get('/2016/6/3/nyc_craft_beer_fest', function(req, res) {
    res.render('060316_nyc_craft_beer_fest');
})

app.get('/2016/6/9/new_jersey_beach_bars', function(req, res) {
    res.render('060916_jersey_beach_bars');
})

app.get('/2016/6/9/weekend_vineyards', function(req, res) {
    res.render('060916_weekend_vineyards');
})

app.get('/2016/6/13/asbury_biergarten', function(req, res) {
    res.render('061316_asbury_biergarten');
})

app.get('/2016/6/15/poses_n_pints', function(req, res) {
    res.render('061516_poses_n_pints');
})

app.get('/2016/6/17/drinks_for_dad', function(req, res) {
    res.render('061716_drinks_for_dad');
})

app.get('/2016/6/29/pudding_shots', function(req, res) {
    res.render('062916_pudding_shots');
})

app.get('/2016/6/29/summer_beer_games', function(req, res) {
    res.render('062916_summer_beer_games');
})

app.get('/2016/6/30/american_punch', function(req, res) {
    res.render('063016_american_punch');
})

app.get('/2016/7/5/cypress_brewing', function(req, res) {
    res.render('070516_cypress_brewing');
})

app.get('/2016/7/14/margaritas_on_my_mind', function(req, res) {
    res.render('071416_margaritas_on_my_mind');
})

app.get('/2016/8/2/hoppy_ipa_day', function(req, res) {
    res.render('080216_hoppy_ipa_day');
})

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function() {
    console.log('find me at port: ' + PORT);
})
