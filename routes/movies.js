var express = require('express');
var mongoose = require('mongoose');

var Movie = require('../models/Movie.js');
var util = require('../util/util.js');

var router = express.Router();

// verify token 
router.use(function(req, res, next) {
  return util.validateToken(req, res, next);
});

router.get('/', function(req, res, next) {
  Movie.find(function (err, movies) {
    if (err) return next(err);
    res.json(movies);
  });
});

module.exports = router;
