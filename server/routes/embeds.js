var express = require('express');
//var mongoose = require('mongoose');
var router = express.Router();
var resources = require('../models/embed');


router.get('/', function(req, res){

	resources.find({}, function(err,docs) {
		if (err) {
			res.send({error:err});
		} else {

		res.json({resources:docs});
	}

	});

});

/*router.get('/', function(req, res, next) {
    res.json(req.isAuthenticated());
});

router.get('/name', function(req, res, next){
    res.json(req.user);
});

router.put("/id", function(req,res,next){
    User.findByIdAndUpdate(req.user.id, {lastlogin: Date.now()}, function(){
        console.log("User Updated!");
    });

    res.json(req.user);
});*/

module.exports = router;
