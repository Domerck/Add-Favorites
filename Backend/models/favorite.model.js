const mongoose = require('mongoose');

//Attributes of Inventory
var Favorite = mongoose.model('Favorite', {
  thesisName: { type: String },
  authors: { type: String },
  college: { type: String },
  dateSubmitted: { type: String }
});

module.exports = Favorite;
