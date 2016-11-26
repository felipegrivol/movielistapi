var express = require('express');
var fs = require('fs');

var util = require('../util/util.js');
var config = require('../util/config.js');
var Login = require('../models/Login.js');
var Movie = require('../models/Movie.js');

var router = express.Router();

router.get('/login', function(req, res) {

    Login.findOne({ user: 'admin' }, function(err, login) {
        if (!login) {
            login = new Login({ 
                user: 'admin', 
                password: 'admin'
            });

            login.save(function(err) {
                if (err) throw err;
                res.json({ success: true, message: 'User admin, password admin inserted.' });
            });
        }
        else {
            res.json({ success: true, message: 'User admin already in the database' });
        }
    });
});

router.get('/movie', function(req, res) {
  var movies = JSON.parse(fs.readFileSync('./public/movies.json', 'utf8'));

  movies.forEach(function(element) {
    Movie.findOne({ title: element.title }, function(err, movie) {
        console.log(movie);
        if (!movie) {
            Movie.create(element, function (err, post) {
                if (err) throw err;
            });
        }
    });  
  });

  res.json({ success: true, message: 'Movies inserted to the database.' });
});


module.exports = router;
