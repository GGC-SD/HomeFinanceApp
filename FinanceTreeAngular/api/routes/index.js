var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlAuth = require('../controllers/authentication.js');


// authentication
router.post('./FinanceTreeAngular/src/home.html', ctrlAuth.login);

module.exports = router;
