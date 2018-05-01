var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    user_name: {type: String, unique: true},
    pwd: {type: String}
});

var User = mongoose.model('users', userSchema);
module.exports = User;