/**
 * Created by NehaP on 6/4/2017.
 */

var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    ,  ObjectId = Schema.Types.ObjectId;


// Schema

var userSchema = Schema ({
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: Number,
        required: true
    },
    salt: {
        type: String,
        required: false
    }

});

// Export Schema

var users = mongoose.model('users', userSchema, 'users');
module.exports.users = users;