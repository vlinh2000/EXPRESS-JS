var express = require("express");
var router = express.Router();
var db=require('../db');
var controller = require('../controller/user.controller');
var validate=require('../validate/create.validate');


router.get('/',controller.index);

router.get('/cookies',function(req,res,next){
	res.cookie('linh',123);
	res.send('hello');
})

router.get('/search',controller.search);

router.get('/create',controller.create);

router.post('/create',validate.postCreate,controller.postCreate);

router.get('/:id',controller.get);

module.exports = router;
