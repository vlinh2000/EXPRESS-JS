var db = require('../db');
var shortid = require('shortid');
module.exports=function(req,res,next){
if(!req.signedCookies.sessionID){
	var sessionID=shortid.generate();
	res.cookie('sessionID',sessionID,{
    signed:true
   });
   
   db.get('sessionID').push({
   	id: sessionID,
   	cart: {}
   }).write();
}
var sessionID=req.signedCookies.sessionID;
var cart= db.get('sessionID').find({id:sessionID}).get('cart').value();
res.locals.cart=cart;
next();
}