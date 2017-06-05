/**
 * Created by NehaP on 6/4/2017.
 */

 // Module dependencies.

var crypto = require('crypto');

 // Bytesize.

var len = 128;


 // Iterations. ~300ms

var iterations = 12000;


exports.hash = function (pwd, salt, callback) {
    if (3 == arguments.length) {
        crypto.pbkdf2(pwd, salt, iterations, len, callback);
    } else {
        callback = salt;
        crypto.randomBytes(len, function(err, salt){
            if (err) return callback(err);
            salt = salt.toString('base64');
            crypto.pbkdf2(pwd, salt, iterations, len, function(err, hash){
                if (err) return callback(err);
                callback(null, salt, hash);
            });
        });
    }
};
