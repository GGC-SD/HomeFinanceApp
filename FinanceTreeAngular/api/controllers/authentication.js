var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.login = function(req, res) {

  // if(!req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }
app.post('/login',
  passport.authenticate('local', function(err, user, info){

    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
      res.redirect('./FinanceTreeAngular/src/home.html');
    } else {
      // If user is not found
      res.status(401).json(info);
      res.redirect('./FinanceTreeAngular/src/index.html');
    }
  })(req, res)
)};