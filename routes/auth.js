var express = require('express');
var jwt = require('jsonwebtoken');

var util = require('../util/util.js');
var config = require('../util/config.js');
var Login = require('../models/Login.js');

var router = express.Router();

router.post("/login", function(req, res, next) {
    var login = req.body;

    Login.findOne({ user: login.user, password: login.password  }, function(err, user) {
        if (err) throw err;

        if (!user) {
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
