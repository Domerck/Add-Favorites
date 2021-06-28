//Imports
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors')

//Local Imports
const { mongoose } = require('./db.js');
var thesisController = require('./Backend/controllers/thesisController.js');
var favoriteController = require('./Backend/controllers/favoriteController');

var app = express();
//middleware to send JSON datas
app.use(bodyparser.urlencoded( { extended: true, }));
app.use(bodyparser.json());
app.use(cors({ origin: 'http://localhost:4200' }));


app.listen(5000, () => { console.log( "Express server started at port : 5000"); });


//middleware function to add router from each controller with their correspoding baseUrl
app.use('/thesisrepo', thesisController);
app.use('/favorite', favoriteController);