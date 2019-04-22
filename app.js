const express = require('express'),
path = require('path'),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
expressValidator = requere('expressValidator'),
session = require('express-session'),
passport = requere('passport'),
config = requere('./config/db.js'),
app = express(),
Article = require('./models/article')

mongoose.connect(config.database);
let db = mongoose.connection;

db.once('open', function(){
    console.log('connect to MongoDB!');
});

db.on('error', function(err){
    console.log(err);
});

app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'keybord cat',
    resave: true,
    saveUninitialized: true
}));

app.use(require('connect-flash')());
app.use(function(req, res, next){
    res.locals.mongoose = require('express-messages')(req, res);
    next();
});



