/**
 * Created by NehaP on 6/4/2017.
 */

// Require

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var router = express.Router();
var mongoose = require('mongoose');
var users = require('../services/users.service');
var config = require('../config/dev.config.json');
var session = require('express-session');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('ShoppingCart'));
app.set('trust proxy', 1)
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}));


app.use(function (req, res, next) {
    var err = req.session.error,
        msg = req.session.success;
    delete req.session.error;
    delete req.session.success;
    res.locals.message = '';
    if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
    if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
    next();
});

// Single User Routes

router.post('/authenticate', function (req, res) {
    users.authenticateUser(req.body.username, req.body.password, function (err, user) {
        if (user) {

            req.session.regenerate(function () {

                req.session.user = user;
                return res.status(200).json({status: 'Login successful!'});
            });
        } else {
            req.session.error = 'Authentication failed, please check your username and password.';
            return res.status(500).json({status: 'Invalid Username/Password'});
        }
    });
});


router.post('/register', function (req, res, next) {
    var user = req.body;

    users.userExist(user.username, function (err, response) {
       if(err) {
           res.json({
               data: "Username already exists, please use an alternate username."
           });
       }


       users.createUser(user, function (err, response) {
            if (err) {
                throw err;
            }

           res.json({
               data: "User succesfully created"
           });
           res.redirect('/login');
       })
    });
});


module.exports = router;
