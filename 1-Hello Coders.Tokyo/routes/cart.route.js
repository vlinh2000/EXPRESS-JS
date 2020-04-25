var express = require("express");
var router = express.Router();
var db=require('../db');
var controller = require('../controller/cart.controller');

router.get('/add/:productID',controller.cart);

module.exports = router;