//Imports
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors')

//Local Imports
const { mongoose } = require('./Backend/models/db.js');
var thesisController = require('./Backend/controllers/thesisController.js');
var favoriteController = require('./Backend/controllers/favoriteController');

var app = express();

app.use(bodyparser.urlencoded( { extended: true, }));
app.use(bodyparser.json());
app.use(cors())

app.listen(5000, () => { console.log( "Express server started at port : 5000"); });

app.use('/thesisrepo', thesisController);
app.use('/favorite', favoriteController);