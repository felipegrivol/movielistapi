var express = require('express');

var util = require('../util/util.js');
var config = require('../util/config.js');
var Login = require('../models/Login.js');

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

router.post('/movie', function(req, res) {
  
  Movie.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
