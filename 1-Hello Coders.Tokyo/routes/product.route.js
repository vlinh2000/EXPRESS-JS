var express = require("express");
var router = express.Router();
var db=require('../db');
var controller = require('../controller/product.controller');

router.get('/product',controller.product);

// router.post('/product',controller.postproduct);

module.exports = router;