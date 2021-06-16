//Import the dependencies
const express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

const Thesis = require('../models/thesis.model.js');


//Main Thesis Section

//localhost:5000/thesisrepo
router.get("/", (req, res) => {
  Thesis.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        `Error in Retrieving Thesis: ${JSON.stringify(err, undefined, 2)}`
      );
    }
  });
});

//get by Id
router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No thesis with given ID: ${req.params.id} `);

  Thesis.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else
      console.log(`Error in Retrieving Thesis: ${JSON.stringify(err, undefined, 2)}`
      );
  });
});

//post
router.post("/", (req, res) => {
  var thesis = new Thesis({
    thesisName: req.body.thesisName,
    authors: req.body.authors,
    college: req.body.college,
    dateSubmitted: req.body.dateSubmitted,
  });
  thesis.save((err, docs) => {
    if (!err) {
      res.send(docs);
    } else
      console.log(
        `Error in Saving Thesis data: ${JSON.stringify(err, undefined, 2)}`
      );
  });
});

//delete
router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No favorites with given ID: ${req.params.id}`);

  Thesis.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      req.send(doc);
    } else
      console.log(
        `Error in favorites Deletion: ${JSON.stringify(err, undefined, 2)}`
      );
  });
});


module.exports = router;
