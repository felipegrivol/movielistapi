var express = require('express');
var jwt = require('jsonwebtoken');

var util = require('../util/util.js');
var config = require('../util/config.js');
var Login = require('../models/Login.js');

var router = express.Router();

router.post("/auth", function(req, res, next) {
    
    Login.findOne({ user: req.body.user  }, function(err, user) {
        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'User or password invalid!' });
        } else if (user.password != req.body.password) {
            res.json({ success: false, message: 'User or password invalid!' });
        } else {
            var token = jwt.sign(user, config.secret, { expiresIn: '1m' });

            res.json({
                success: true,
                message: 'Token generated',
                token: token
            });
        }
    });
});



module.exports = router;
