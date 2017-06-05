/**
 * Created by NehaP on 6/3/2017.
 */

// Require

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var products = require('../services/products.service');
var config = require('../config/dev.config.json');
// Routes

// Multiple Products Routes

    router.get('/', function (req, res, next) {

        products.getProducts(function (err, products) {
            if(err) {
                throw err;
            }

            res.json({
                href:req.hostname + ":" + config.port + req.originalUrl,
                data:products
            });

        })

    });


module.exports = router;
