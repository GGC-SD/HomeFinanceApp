var express = require('express');
var router = express.Router();
var User = require('../src/User');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express'});
});

router.post('/home.html', function(req, res){
    var user_name = req.body.user_name;
    var pwd = req.body.pwd;

    User.findOne({user_name: user_name, pwd: pwd}, function(err, user){
        if(err){
            console.log(err);
            return res.status(500).send();
        }

        if(!user){
            return res.status(404).send();
        }

        return res.status(200).send();
    })
})