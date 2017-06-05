/**
 * Created by NehaP on 6/4/2017.
 */

var bcrypt = require('bcryptjs');
var Q = require('q');
var jwt = require('jsonwebtoken');
var hash = require('../pass').hash;
var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.Types.ObjectId;

var users = require('../models/user.model').users;

// Export Utilities

module.exports = {


    findUser : function (username, callback) {

        var query = {
            username: username
        };

        users.findOne(query, callback);

    },

    createUser : function (user, callback) {

      /*  var pwd = bcrypt.hashSync(user.password, 10);

        var query = {
            username : user.username,
            password : pwd,
            userType : user.userType
        };

        users.create(query, callback);
    */
      console.log(user);
        hash(user.password, function (err, salt, hash) {
            if (err) throw err;
            var query = {
                first: user.first,
                last: user.last,
                username: user.username,
                password: hash,
                userType: user.userType,
                salt: salt
            };
            users.create(query, callback);
        });
    }

            /*).save(function (err, newUser) {
                if (err) throw err;
                authenticate(newUser.username, password, function(err, user){
                    if (err) {
                        return res.status(500).json({err: err});
                    }
                    if(user){
                        req.session.regenerate(function(){
                            req.session.user = user;
                            return res.status(200).json({status: 'Registration successful!',username: newUser.username, email:newUser.email, city:newUser.city});
                        });
                    }
                });
            });
        });
    }*/,

    authenticateUser : function (username, password, callback) {

        users.findOne({username: username},  function (err, user) {
            if (user) {
                if (err) return callback(new Error('Username not found'));
                hash(password, user.salt, function (err, hash) {
                    if (err) return callback(err);
                    if (hash == user.password) return callback(null, user);
                    callback(new Error('Invalid password'));
                });
            } else {
                return callback(new Error('Username not found'));
            }
        });
    },



    userExist: function(username, callback) {
    users.count({
        username: username
    }, function (err, count) {
        if (count === 0) {
           callback();
        } else {
            return callback(new Error('User Exists'));
        }
    });
}




};