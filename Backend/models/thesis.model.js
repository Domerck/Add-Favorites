const mongoose = require('mongoose');

//Attributes of Inventory
var Thesis = mongoose.model('Thesis', {
  thesisName: { type: String  },
  authors: { type: String },
  college: { type: String },
  dateSubmitted: { type: String },
});

module.exports = Thesis;