/**
 * Created by NehaP on 6/3/2017.
 */

var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.Types.ObjectId;

var products = require('../models/products.model').products;

// Export Utilities

module.exports = {

    getProducts : function (callback) {

        products.find(callback);

    }

};