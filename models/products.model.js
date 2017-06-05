/**
 * Created by NehaP on 6/3/2017.
 */

var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    ,  ObjectId = Schema.Types.ObjectId;


// Schema

var productSchema = Schema ({
   name: {
       type: String,
       required: true
   },
   price: {
       type: Number,
       required: true
   }
});

// Export Schema

var products = mongoose.model('products', productSchema, 'products');
module.exports.products = products;