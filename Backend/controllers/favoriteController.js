//Import the dependencies
const express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

const Favorite = require('../models/favorite.model');

//localhost:5000/favorites

//Favorites Section
//get Favorites
router.get("/", (req, res) => {
  Favorite.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(`Error in Retrieving Favorites: ${JSON.stringify(err, undefined, 2)}`
      );
    }
  });
});

//get by Id
router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Favorite with given ID: ${req.params.id} `);

  Favorite.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else
      console.log(`Error in Retrieving Favorite: ${JSON.stringify(err, undefined, 2)}`
      );
  });
});

//post
router.post("/", (req, res) => {
  var favorite = new Favorite({
    thesisName: req.body.thesisName,
    authors: req.body.authors,
    college: req.body.college,
    dateSubmitted: req.body.dateSubmitted,
  });
  favorite.save((err, docs) => {
    if (!err) {
      res.send(docs);
    } else
      console.log(`Error in Saving into Favorites: ${JSON.stringify(err, undefined, 2)}`
      );
  });
});

//delete
router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No favorites with given ID: ${req.params.id}`);

  Favorite.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else
      console.log(`Error in Removing Favorites: ${JSON.stringify(err, undefined, 2)}`
      );
  });
});

module.exports = router;
